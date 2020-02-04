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
