mac 版本
brew instll maven
# springBoot基础
## maven的安装
## 使用brew 安装

brew install maven 缺点是版本过低

## 手动安装

![35c08745688295d99ed5a509ff9d2365.png](en-resource://database/140903:1)


![9d63cfcd20fc7370b6f237d602b7765c.png](en-resource://database/140901:1)


## 安装完成后重载profile

source ~./bash_profile

mvn -v

windows 中maven的把 bin 添加到path中即可

## maven的意义
maven的主要功能是复用,引用其他的包以及管理复杂(网状)的引用关系,以及引用的更新

想想以前自己开发java项目的时候需要自己将包以及依赖包都手动导入到项目当中

开发人员应该只关心当前使用到的包,而不是包的依赖以及依赖的依赖

## IDE

jetBrain InterllJ idea

VsCode Eclipse Idea


## springBoot init

1. ideas
2. springBoot init
3. maven

脚手架生成器
[Spring Initializr](https://start.spring.io/)

spring web  必需
spring boot devtools 热重启
## 使用idea 创建

在maven中一个引入一个包是由
groupId 
artifactId
version
这三个属性控制的
例如:
```xml
<groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-parent</artifactId><version>2.2.5.RELEASE</version>
```

![52d5041931f318dea140824749a9f866.png](en-resource://database/140940:1)

这里指的根目录指的是 one.macheng.missyou 下面的


为什么api有版本号?

api.v1
api.v2
如果添加新功能,而原来的api有部分的客户端未升级,就需要另起炉灶,新客户端用新的api.v2,这样就兼容了旧的版本

![3238da9388a750a9b0b21f89a5ed6ea1.png](en-resource://database/140942:1)

## 配置热重启

注意到下面的的依赖并没有版本号原因是maven会自动根据springBoot的版本调整依赖的版本号

```xml
<dependency>    <groupId>org.springframework.boot</groupId>    <artifactId>spring-boot-devtools</artifactId>    <scope>runtime</scope>    <optional>true</optional></dependency>
```
1. 确定 spring-boot-devtools.jar 正确安装
![710c8e960f5acde8146f3d9ba7f4b51f.png](en-resource://database/140944:1)

2. build project auto
![5a850a9a6a0f8c9085ee099bbe5cd5a1.png](en-resource://database/140946:1)



按照教程配置热启动无效解决方法

快捷键：ctrl+Shift+Alt+/， 然后点击Registry后，找到compiler.automake.allow.when.app.running 勾选上即可。
MAC 快捷键：Shift+option+command+/,选择Registry

## 常用的注解

![7a48cb57881d459d038ae5960e336b69.png](en-resource://database/140948:1)


## RestFul API的字描述性
api的字描述性例如:// host:port/v1/banner/test

1. 其中v1可以写在url当中
2. 也可以写在header当中


* [mv bot.UpdatePreference to http.go · MixinNetwork/supergroup.mixin.one@0ef4ece](https://github.com/MixinNetwork/supergroup.mixin.one/commit/0ef4ece6f3b98e3c50ca45bb43dc5c46867df645)
* [feat: first api · macheng2017/missyou@6fc65c3](https://github.com/macheng2017/missyou/commit/6fc65c3919f5710fc29a69fcf5ff99af5803c932)
* [feat:@ResponseBody直接使用这个注解可以直接使用return返回字符串的方式,写入到response当中 并且解决了字符串… · macheng2017/missyou@00c6ace](https://github.com/macheng2017/missyou/commit/00c6ace5b69f86448b06b17d17d594488ed86411)
* [feat: 几个常用的注解用法 @RequestMapping @PostMapping @GetMapping ... · macheng2017/missyou@a0f172b](https://github.com/macheng2017/missyou/commit/a0f172b3caa54a8e5cc81454d33d0a076a63872f)
* [feat:如果每个方法都需要ResponseBody 可以提取到类上 如果@Controller 和 @ResponseBody 可以合为… · macheng2017/missyou@6360e71](https://github.com/macheng2017/missyou/commit/6360e7190f24ce9cc4306c0f080397d7a4f7bde7)
* [feat:用一个通用的method @RequestMapping还可以用作前缀 · macheng2017/missyou@d3f1222](https://github.com/macheng2017/missyou/commit/d3f1222578e598759e4e0754c458909a53868f69)

## java为什么那么复杂?
软件工程 方法论 项目的维护和迭代

可维护的代码

所有软件的复杂性都是写出可维护的代码


高级程序员
想写出 1. 不啰嗦 2.字描述性的代码(可读性强) 3.可维护性

价值观是:
可维护性 > 快速开发 


初学者和高级程序员在写程序时的想法是不一样的,初学者需要一个个完成的项目激励自己
价值观是:
快速开发 > 可维护性

使用其他语言比如node.js koa 没有类似java的ioc di 一堆概念也没有注解也能写出一样的项目,那么我们为什么要用springBoot?

## 关于pojo
问题1 : pojo是简单的java对象，它这个简单是怎么定义的，是因为只具备简单的构造方法，get，set方法吗，那么复杂java对象是指什么？
问题2:pojo不继承，不实现。那么关于数据库映射的实体。使用了lombok注解它还是简单java对象吗？
问题3:pojo既然说是简单的java对象为啥不叫javaBeans？
源自：&nbsp;Java编程思想深度理论知识 1-2 SpringBoot为什么有这么多复杂的概念？

java里这些概念真的很烦人，且没太大意义。C#这块就好很多，C#有一个数据类型叫结构类型，非常清晰。POJO可以理解成一个非常简单，只包含属性，不包含方法类。它主要是用来存储数据，但不能执行方法。JavaBean，有更多的要求，比如必须有无参构造函数等。但POJO不一定有 ，POJO就是用来存储数据的。JavaBean我 个人认为可以包含一些简单的逻辑（方法）
 
 go里面也有struct的概念 结构类型
 
 
 
 springBoot 看源码
 
 springBoot 源码经过很多的版本的迭代,
 里面有很多的模块 很多年的开发去优化,看源码需要徐徐图之,
 看源码的话最不建议为了面试去看源码
 
 看源码需要学习设计思想
 
 参考:[来聊聊源码学习_慕课手记](https://www.imooc.com/article/33858)
 
 
 软件工程一切的复杂性都来自一个问题:
 怎样才能写出可维护性的代码?
 
 围绕这个问题,诞生了一系列的原则
 
 开闭原则(OCP)
 里氏替换原则
 迪米特法则
 IOC DI
 最重要的还是开闭原则 ,其他的原则都是为了实现开闭原则的一个子法则
 
 定义:
 
 软件 函数 类 对扩展开是放的,对修改是封闭的
 
 为了避免修改代码带来的bug,新增业务模块/类替代原来的类
 
 开闭原则的运用非常灵活
 
 一个类函数模块,接口都可以使用
 一个电商系统 原来有个打折模块是9折,现在需要修改为8折,那么这个时候你是在原来的代码基础上修改为8折吗?
 比较妥当的做法应该是再实现一个模块提供8折的服务,比如拼多多的打折卡
 还有就是 api的设计上也实现的开闭原则
 
![537a5a98573aba62e50c8d4a4143017d.png](en-resource://database/140985:1)

不修改原来的v1 接口直接新增一个接口

如果想实现开闭原则就需要面向抽象编程 interface abstract

三大特效 多态性 才能实现

为什么实现开闭原则必须实现面向抽象编程?

![97280c8d81397714f8442ee0b7bff8c3.png](en-resource://database/140989:0)


 
 
 
 在一个abc中的类,c类被ab都引用,当c被弃用的时候,我们会更改所有的引用以及方法,
 原因是c类被引用的时候太具体了,不是一个抽象方法,一旦太具体了就会固化
 
 解决方法是不要面对具体的类,而是面对抽象去编程
 
 
有的编程教程会用强耦合这个概念去解释,这个现象,这个概念不够精确,因为代码中都是会有耦合的不可避免,更精确的描述是,面向具体还是面向抽象编程
 
 最终目的是引出IOC DI 为了解决了什么问题?
 
 最终目的是为了使用IOC DI实现开闭原则
 
 IOC/DI这个概念的迭代过程
 
 第一阶段使用 interface
 第二阶段 设计模式: 工厂模式
 第三阶段 IOC/DI
 
 目的表面上是面向抽象编程,实现了开闭原则
 要实现可维护的代码
 
 lol的软件工程案例:
 英雄和地图变动的非常频繁
 
  生命周期: 10年
  
  设计思想 
  更新其中一个属性会引起其他
  英雄
  地图
  道具
  
 
 
