# 在GitHub上部署自己的博客

### 步骤

1. 注册一个域名(不用备案)
3. 将域名解析到GitHub服务器上(参考区块链小白书最后部分)
4. 安装vscode
5. 安装nvm 
6. 安装node.js
7. 安装[VuePress](https://vuepress.vuejs.org/zh/
8. 使用ssh无密码登录GitHub


## 为什么要自己搭建一个blog?

现在互联网上高质量的博客系统多如牛毛,直接用公众号,或者简书,或者其他就可以了,为什么自己再搭建一个blog呢?
1. 如果使用其他公司的写作产品也可以,但是对于我们程序员来说这样做不cool
2. 如果以长期(十年以上)这个视角来考虑问题的话你需要在互联网上建立自己的根据地,
这样即使其他公司的写作产品不在运作了也不至于,丢失自己的数据
3. 可以将其他公司的写作产品当做自己的分基地,毕竟上面的读者多,可以将自己搭建的当做练习区,
毕竟我们搭建在了GitHub上了,GitHub天然的带了时光机功能,可以将自己写作过程以及修改迭代过程一一记录在commit当中
4. 最重要的一个理由就是,在互联网上申请自己的域名并建立blog系统,从根本上来说向互联网世界发布自己的言论,
不需要那个公司对自己负责,而是自己对自己言论负责,更不存在被禁止使用某些词汇,被删帖这些情况,当然我们只会讨论学习以及技术.


##  将域名解析到GitHub服务器上(参考区块链小白书最后部分)

    你需要在域名服务商的页面中，为自己的域名添加以下 4 条 A 记录和 1 条 CNAME 记录：
    
    A 记录：
    
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
    CNAME
    
    host: www
    
    Answer: your-github-username.github.io
* [区块链小白书](https://blockchainlittlebook.com/#/?id=%e5%85%b3%e4%ba%8e%e6%9c%ac%e4%b9%a6)

## 安装nvm
nvm是一个 node.js的版本管理器,安装这个是方便以后node.js更新以及多版本之间的切换
或者不使用nvm 直接安装[Node.js](https://nodejs.org/en/)也可以

1. macOS或linux安装方式
[nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm)
2. windows系统 
[Releases · coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
3. 测试是否安装成功
        
        在terminal中输入 nvm  或者 nvm version
4. 使用nvm安装最新版node.js
    
        nvm install node latest
        或者指定版本号
        nvm install 12.16.1
     
     如果中间出错具体参考
      
   [nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm)  
    
        
5. node.js是一个js的运行环境
    而安装好node.js 之后其中会附带一个包管理工具npm
    
        npm -v 查看npm版本
        


## 安装vuePress
[VuePress](https://vuepress.vuejs.org/zh/)是一个静态网站生成器,
可以将你的项目下面以markdown格式保存的文档生自动转换为HTML文件
### 安装方式

    npm install -g vuepress
    
    # 创建项目目录
    mkdir vuepress-starter && cd vuepress-starter
    
    # 新建一个 markdown 文件
    echo '# Hello VuePress!' > README.md
    
    # 开始写作
    vuepress dev .
    
    # 构建静态文件
    vuepress build .
