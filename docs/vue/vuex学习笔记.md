# vuex学习笔记

最近项目中用到了vuex不得不重新看一遍vuex的文档,照着文档上的案例自己做了一遍,以下是自己探索留下的足迹,
自己很喜欢这种在一个案例上不断的添加新的东西或者重构的感觉,这种感觉很像自己一步步从自己的舒适区跨向自己的能力边界之外的感觉,而在一个示例上不断修改,会有一个弊端就是,你不知道你的思路如何从原始的A点经过了无数的步骤,
到达了z点,借助github这种强大的commit可以将自己的思路不断的commit打下一个标签(或类比的说是设置一个游戏存档),
以便于以后的自己,能沿着自己此时此刻的思路进行回溯,这是我想起了《糖果屋》(又译《汉泽尔与格莱特》)的故事,
为自己的更深入思考洒下一些面包屑,避免未来的我再次迷失在诸多文档之中

* [feat: 在网页中使用vuex 增加数字大小 · macheng2017/review-vue@a7ad807](https://github.com/macheng2017/review-vue/commit/a7ad80725c60405940951eefd52d645d1cd9052e)
* [feat: 对经常使用webpack构建的同学们来说,这里有些奇怪,为什么没有使用import导入就可以直接使用Vue以及Vuex? · macheng2017/review-vue@df05324](https://github.com/macheng2017/review-vue/commit/df053245ef780e6c2283ad78f710d70053ef43af)
* [refactor:封装一个Counter组件 · macheng2017/review-vue@56db87d](https://github.com/macheng2017/review-vue/commit/56db87d20cc8678e2f370177a33b5a7cab08e9a7)
* [refactor:通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$s… · macheng2017/review-vue@59ad444](https://github.com/macheng2017/review-vue/commit/59ad44498fe57e638aaa082fce22b44611959922)
* [refactor:使用mapState辅助函数 · macheng2017/review-vue@8da86dd](https://github.com/macheng2017/review-vue/commit/8da86dd343377fa91246a9fb00c39899490d5812)
* [refactor:使用mapState辅助函数,添加一些扩展 · macheng2017/review-vue@402f94e](https://github.com/macheng2017/review-vue/commit/402f94e734640218418c3cb788e3ba996768b18a)
* [refactor:使用mapState辅助函数,添加一些扩展 · macheng2017/review-vue@f9f7e15](https://github.com/macheng2017/review-vue/commit/f9f7e150288056c2c192965b6dc928d2354f73fa)
* [refactor:映射 this.count 为 store.state.count · macheng2017/review-vue@9ee4023](https://github.com/macheng2017/review-vue/commit/9ee4023d56fe34e18cd36a1caf0914b685bf1619)
* [refactor:使用对象展开运算符将此对象混入到外部对象中 · macheng2017/review-vue@57fdc14](https://github.com/macheng2017/review-vue/commit/57fdc148b698b3ea10532530e0d38963604865ba)
* [add:使用Getter从 store 中的 state 中派生出一些状态 · macheng2017/review-vue@c6aa401](https://github.com/macheng2017/review-vue/commit/c6aa401ff28d82fb7055586a0399f41a267d7b69)
* [add:Getter 也可以接受其他 getter 作为第二个参数： · macheng2017/review-vue@654c1f9](https://github.com/macheng2017/review-vue/commit/654c1f9031bfa884e9e35f35371385e3c922b7de)
* [add:Getter 也可以接受其他 getter 作为第二个参数： · macheng2017/review-vue@a75dffc](https://github.com/macheng2017/review-vue/commit/a75dffcbd8334967a1e9705cec5e6576c137e704)
* [add:Getter 在组件中使用 · macheng2017/review-vue@8ed1700](https://github.com/macheng2017/review-vue/commit/8ed170082f4f2fa9ccb922bc8422a39c161ca791)
* [add:Getter 通过方法访问 · macheng2017/review-vue@b2a3f39](https://github.com/macheng2017/review-vue/commit/b2a3f3998a7229bb252e94e5cf2bf1a71b2718a9)
* [add:mapGetters 辅助函数 · macheng2017/review-vue@563eaf0](https://github.com/macheng2017/review-vue/commit/563eaf0f5f109154020ddb3753a51f3819e3b4f3)


### Mutation 需遵守 Vue 的响应规则
既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

1. 最好提前在你的 store 中初始化好所有所需属性。

2. 当需要在对象上添加新属性时，你应该

* 使用 Vue.set(obj, 'newProp', 123), 或者

* 以新对象替换老对象。例如，利用对象展开运算符我们可以这样写：
```js
state.obj = { ...state.obj, newProp: 123 }
```
* [refactor:你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）： · macheng2017/review-vue@0ceefac](https://github.com/macheng2017/review-vue/commit/0ceefacb66cb1fbafb0f7885b8b1fe866f4ec2cd)
* [refactor:在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读： · macheng2017/review-vue@c31e985](https://github.com/macheng2017/review-vue/commit/c31e98566c84f55d4a35e1a0222abe7c180808a5)
* [refactor:对象风格的提交方式 · macheng2017/review-vue@fcb2ffd](https://github.com/macheng2017/review-vue/commit/fcb2ffda1a679ac7ebb9b9f5f5e30fbccde85f60)
* [refactor:使用mapMutations · macheng2017/review-vue@9695a96](https://github.com/macheng2017/review-vue/commit/9695a965906fd89af47e5b2fe1756bedd651c590)
### Mutation 必须是同步函数
一条重要的原则就是要记住 mutation 必须是同步函数
* [Mutation | Vuex](https://vuex.vuejs.org/zh/guide/mutations.html#mutation-%E9%9C%80%E9%81%B5%E5%AE%88-vue-%E7%9A%84%E5%93%8D%E5%BA%94%E8%A7%84%E5%88%99)
### Action
Action 类似于 mutation，不同在于：

* Action 提交的是 mutation，而不是直接变更状态。
* Action 可以包含任意异步操作。

#### 提供两个action真实的案例,分别是登录和获取用户信息
```js
const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        console.log('data', data)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
// get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const { roles, name, avatar, introduction } = data
        // console.log('getInfo data:', data)
        // console.log('getInfo roles:', roles)

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
}
```

* [feat:使用vuex之后出现新的问题: 在父组件中使用$refs调用子组件中的校验isValidate后没有返回值,父组件的before… · macheng2017/crm-zbx-admin@a165828](https://github.com/macheng2017/crm-zbx-admin/commit/a16582859a2b115d15e7d988cb23921d7798b69a)


```js
  // 标签切换之前调用的钩子,用于校验表单 after success并发送action到vuex
    beforeSwitch() {
      console.log('a hook ', this.$refs.tabInfo[0].isValidate())

      return this.$refs.tabInfo[0].isValidate()
    },
```

```js
    // validate form data
    isValidate() {
      this.$refs.baseInfo.validate((valid) => {
        console.log('baseInfo', valid)
        if (valid) {
          // 校验通过则提交到store
          // this.$store.commit('tabForm/SET_BASE_INFO', this.baseInfo)
          this.$store.dispatch('tabForm/changeForm', this.baseInfo)
          return true
        }
      })
    }
```

* [refactor:Action 通过 store.dispatch 方法触发： · macheng2017/review-vue@7998f5e](https://github.com/macheng2017/review-vue/commit/7998f5ecc67022b5c6359f59710e824ef9a1e57e)

>参考:
> * [糖果屋 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E7%B3%96%E6%9E%9C%E5%B1%8B)
> * [Vuex 是什么？ | Vuex](https://vuex.vuejs.org/zh/)
