import Vue from 'vue'
import App from './App.vue'
// 1.引入vuex
import Vuex from 'vuex'

Vue.config.productionTip = false

// 2.这里触发了vuex的store方法，安装好vuex这个库
Vue.use(Vuex)
// 3.创建一个实例，通过调用vue.Store,就是实例化一个vuex赋值给store
const store=new Vuex.Store({
  state:{
    // a.state中创建初始化一个数据
    count:0
  },
  // b.mutations 中创建一个count++的mutation
  mutations:{
    countIncrease(state,v){
      // state.count++
      state.count=v
    }
  }
})


new Vue({
  // 4.将vuex实例挂载到vue对象上
  store,
  render: h => h(App),
}).$mount('#app')
