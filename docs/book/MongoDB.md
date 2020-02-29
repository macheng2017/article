# MongoDB数据库添加密码

配置角色 权限

四点认知

	1. mongodb没有默认管理员账号,先添加管理员账号,在开启权限认证
	2. 只有切换到admin这个数据库之后添加的账号才算是管理员账号
	3. 用户只能在用户所在的数据库登录,包括管理员账号
	4. 管理员可以管理所有的数据库但是不能直接管理数据库,需要到admin认证后才可以


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
    scp -P 56666 mac@120.27.111.200:/home/mac/db/indust-app-old.tar.gz ./

    scp -P 56666 mac@120.27.111.200:/home/mac/db/indust-app-old.json ./

上传

    scp -P 56666 ~/github/indust-app.tar.gz mac@120.27.111.200:/home/mac/dbbackup/


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
