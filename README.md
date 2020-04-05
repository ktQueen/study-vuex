# vuex

## 什么是vuex

    vuex是一个专门为vue.js应用程序开的状态管理模式

    它采用集中式存储管理应用的所有组件的状态

    并以相应的规则保证以一种可预测的方式发生改变

    通俗的讲 vuex 就是类似于全局对象存储的所有组件里面的状态，并且是个响应式的状态

## 应用场景

    多个视图依赖同一状态（读）

    来自不同视图的行为需要改变同一状态（写）

    比较适合中大型项目

## vuex的组成

    State:数据仓库。state是数据的唯一来源，实际上state就是一个json对象

    getter：用来获取数据的。

    Mutation：用来修改数据的。
    它不是直接的修改，它是需要commit一个mutation来修改，
    为什么我们不直接实例化state，给state里面的数据做修改，
    而是commit一个Mutation，再通过Mutation里面传入state,再对state进行修改，
    这里主要是因为我们每次提交Mutation，都会有一个记录，
    vuex这样做是为了更方便的记下每一个数据改变的历史和轨迹，方便于监听以及回滚之类的操作。
    ⚠️注意Mutation本质是一个function，Mutation里面的操作一定是同步的

    Action：用来提交mutation。
    Mutation操作是用来同步直接修改数据，而往往我们的业务需求中有很多异步的修改vuex里面的数据状态，
    Action里面可以进行异步的操作，它就相当于包装了一层，
    可以进行任意的异步编程来提交Mutation，
    然后再通过Mutation来进行同步的修改state数据

    Module：模块化

## vuex的安装

    npm install -g @vue/cli

    vue create study-vuex

    cd study-vuex

    npm run serve

    先把项目跑起来  

    安装vuex包：npm install vuex

    在main.js中
    ```
        // 1.引入vuex
        import Vuex from 'vuex'
        // 2.这里触发了vuex的store方法，安装好vuex这个库
        Vue.use(Vuex)
        //创建vuex实例：new Vuex.store()
        // 3.创建一个实例，通过调用vue.Store,就是实例化一个vuex赋值给store
        const store=new Vue.Store({
        state:{
            // 初始化一个数据
            count:0
        }
        })
        new Vue({
        // 4.将vuex实例挂载到vue对象上
        store,
        render: h => h(App),
        }).$mount('#app')
    ```

    重启项目就可以在控制台看到vuex的状态，vuex就安装成功了
        
        
        
   



# study-vuex

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
