# MongoDB数据库添加密码

配置角色 权限

四点认知

	1. mongodb没有默认管理员账号,先添加管理员账号,在开启权限认证
	2. 只有切换到admin这个数据库之后添加的账号才算是管理员账号
	3. 用户只能在用户所在的数据库登录,包括管理员账号
	4. 管理员可以管理所有的数据库但是不能直接管理数据库,需要到admin认证后才可以

## 使用docker-compose

### 为什么要使用docker-compose

如果你是使用docker启动MongoDB auth的话,就有必要使用docker-compose

    如果使用docker command line arguments 运行有个问题就是,第一次运行是不加auth验证的,
    设置完权限密码之后才能加上auth这样就导致,就会出现第二次不能启动同一个容器的问题,
    目前我没有找到解法,只有先用docker-compose 启动,这样不会第二次在重新开个容器

### 安装docker-compose 
如果按照官网教程,使用这个估计的吐血
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

这里有个镜像网站,浪费了半个小时才想起来

[DaoCloud | Docker 极速下载](https://get.daocloud.io/)


docker-compose.yml 默认保存在 ~下
```yaml
version: '2'
services:
  mongodb:
    image: mongo
    container_name: m2
    ports:
        - 27017:27017
    volumes:
        - "./data/configdb:/data/configdb"
        - "./data/db:/data/db"
    # command: mongod --auth
    # tty: true
```


运行

docker-compose up -d

* [docker创建带auth验证的mongodb数据库 - 掘金](https://juejin.im/post/5a560286f265da3e33043ab0)
* [Enable mongodb authentication with docker - Rahasak-Labs - Medium](https://medium.com/rahasak/enable-mongodb-authentication-with-docker-1b9f7d405a94)
* [基于Docker的MongoDB实现授权访问](https://blog.igevin.info/posts/docker-mongo-auth/)
* [Overview of Docker Compose | Docker Documentation](https://docs.docker.com/compose/)

进入容器
docker -it exec m2 mongo bash

进入数据库并使用 admin
docker -it exec m2 mongo admin


## MongoDB设置

### 设置超级管理员

进入mongo 数据库 mongo --port xxx5
```js
use admin

db.createUser({
user: 'xxxx_xxx_owner',
pwd: 'xxxxxxxx',
roles: [{
role: 'userAdminAnyDatabase',
db: 'admin'
}]
})

```


管理员可以间接管理所有数据库
为什么是间接??

在admin数据库下进行授权

    db.auth('xxxx_cases_owner','mima')
切换到网站数据库
    
    use xxxx-movie

    db.createUser({user:'xxxx_runner',pwd:'mima',roles:[{
    role:'readWrite',db:'xxxx-movie'
    }]})

备份角色只能读

    db.createUser({user:'xxxx_movie_wheel',pwd:'mima',roles:[{
    role:'read',db:'xxxx-movie'
    }]})


切换到admin数据库
使用超级管理员 授权

    use admin
    db.auth('xxxx_cases_owner','mima')

切换到需要操作的数据库

    use xxxx-app

复制上面的,修改下即可

    db.createUser({user:'xxxx_app_runner',pwd:'mima',roles:[{
    role:'readWrite',db:'xxxx-app'
    }]})

备份角色只能读

    db.createUser({user:'xxxx_app_wheel',pwd:'mima',roles:[{
    role:'read',db:'xxxx-app'
    }]})

切换到admin数据库
使用超级管理员 授权

    use admin
    db.auth('xxxx_cases_owner','mima')

切换到需要操作的数据库

    use indust-app

    db.createUser({user:'xxxx_app_runner',pwd:'mima',roles:[{
    role:'readWrite',db:'xxxx-app'
    }]})

备份角色只能读

    db.createUser({user:'xxxx_app_wheel',pwd:'mima',roles:[{
    role:'read',db:'xxxx-app'
    }]})
开启

    sudo vi /etc/mongod.conf
    
    security:
    authorization: 'enable'

    sudo service mongod restart

先use admin 登录 

    use admin
    db.auth('xxxx_cases_owner','mima')
才能使用

链接数据库

    mongo 127.0.0.1:38995/xxxx-movie -u imocc_movie_runner -p mima


    mkdir db
    
    mongodump -h 127.0.0.1:19999 -d indust-app -u indust_app_wheel -p mima -o indust-app-old


打包

    tar zcvf indust-app-old.tar.gz  indust-app-old/

导出表

    mongoexport -h 127.0.0.1:38995 -d xxxx_movie -u xxxx_movie_wheel -p mima -c users -q '{"name":{$ne:null} }' -o ./movie-users-old.json   

下载
    scp -P 56666 root@120.xxxx.xxxx.200:/home/mac/db/indust-app-old.tar.gz ./

    scp -P 56666 root@120.xxxx.xxxx.200:/home/mac/db/indust-app-old.json ./

上传

    scp -P 56666 ~/github/indust-app.tar.gz root@120.xxxx.xxxx.200:/home/root/dbbackup/


正在运行的mongodb 

    mongo --port 38995

    use admin 
    db.auth()
    
    use xxxx_movie_target 



    db.createUser({user:'xxxx_movie_target',pwd:'mima',roles:[{
    role:'readWrite',db:'xxxx_movie_target'
    }]})

导入

    mongorestore -h 127.0.0.1:19999 -d indust-app-target -u indust_app_target -p indust_target ./newdb/indust-app-old/indust-app


