# 遇到的问题记录:
1. async await 的写法会不会造成线程阻塞? 

    >搜索关键词 async await 阻塞 

[请问async await需要等到返回结果后才能向下执行，这是不是违背了node异步非阻塞io的模式呢？ - CNode技术社区](https://cnodejs.org/topic/57d289dcdd64a7dd387f387e)

# 记录一次mongodb的问题

事情是这样的今天做了一个含有表单的选项卡,在提交数据的时候总是在第二次提交的时候才是当前表单中的数据,
才开始想有几种可能
1. 可能是用了vuex导致了数据没有及时的提交到state中 解决方法就是在提交数据之前先commit到state中,结果不行
2. 可能是虽然提交到了state中,但是方法可能是不同步的导致了拿到的还是原来的数据 解决方式是,写成同步的
3. 最后反复折腾,最后突然想到了可能是mongdb 中findByIdAndUpdate返回的就是查询出来的值,即修改之前的值

最后查询了文档果然就是这个问题,
[Mongoose v5.8.11: API docs](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate)

    Returns:
    «Query»
    Issues a mongodb findAndModify update command by a document's _id field. findByIdAndUpdate(id, ...) is equivalent to findOneAndUpdate({ _id: id }, ...).
    
    Finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any) to the callback. The query executes if callback is passed.
    
    This function triggers the following middleware.
    
    findOneAndUpdate()

为了防止以后再出现类似问题总结如下:
1. 看数据是否入库,直接查询数据库即可,不用再看http的 response,有可能返回的是修改之前,删除之前的值

[refactor:修复了detail的动态组件错误,以及重构了baseInfo的提交逻辑 · macheng2017/crm-zbx-admin@8998f3f](https://github.com/macheng2017/crm-zbx-admin/commit/8998f3f11c30239216b3cbac0aba3768cda29d28)

## el-cascader动态加载
```html
<el-cascader :props="props"></el-cascader>
```

这个问题比较复杂,2020/2/5几乎是花了一下午时间都没搞定,晚上痛不欲生,茶不思饭不想的,老是惦记着这个事,
想起来晚上慢慢拆解,还记得我总结出来的技巧吗?
1. 拆解
2. 放慢速度
3. 一小步一小步做试验
4. 记录下自己的思考过程

#### 拆解思路
1. 首先确定一个问题就是,既然动态加载看不懂,先看下固定列表的数据结构是怎样的?
2. 动态和静态的数据结构应该是大同小异的
3. 

#### 做试验 2020/2/5 22:19 第一次试验
1. 搭建实验环境
2. 把静态列表放入data中弄清楚其中的列表选项的数据结构
3. 边运行边修改





[element el-cascader 动态加载次级选项，防止重复加载，异步请求三级数据 – MKBOKE](https://www.mkboke.com/note-book/146/)
[element UI Cascader 级联选择器 动态加载次级选项 - 掘金](https://juejin.im/post/5bd90f67e51d452ef37d4541)
[列表渲染 — Vue.js](https://cn.vuejs.org/v2/guide/list.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
[如何使用外部函数动态加载elememtUI的级联选择器 - 简书](https://www.jianshu.com/p/91a409bc59f2)
[el-cascader级联组件动态加载数据允许选择任意一级的选项 - 极客分享](https://www.geek-share.com/detail/2769427712.html)

## 怎样在webstorm中快速打出console.log


    Yes it does,
    
    <anything>.log and press Tab key. This will result in console.log(<anything>);
    
    ie,
    
    <anything>.log + Tab => console.log(<anything>);
    
    eg1: variable
    
    let my_var = 'Hello, World!';
    my_var.log + Tab => console.log(my_var);
    eg2: string
    
    'hello'.log + Tab => console.log('hello');
    eg3: string and variable
    
    'hello', my_var.log + Tab => console.log('hello', my_var);
    

[does webstorm have some shortcut for console.log or console.info - Stack Overflow](https://stackoverflow.com/questions/32960725/does-webstorm-have-some-shortcut-for-console-log-or-console-info)

## el-cascader 动态加载问题

遇到了一个问题:


## element ui validate这个方法写成async 方式的时候 true会返会有返回值,false的时候,会抛出一个异常
```js{3}
 try {
     // validate这个方法写成async 方式的时候 true会返会有返回值,false的时候,会抛出一个异常
     // 需要用try catch接住
     const valid = await this.$refs.baseInfo.validate()
     console.log('valid', valid)
     // 校验通过则提交到store
     if (valid) {
    
     //...
    }
} catch (e){
// ...
}
```
