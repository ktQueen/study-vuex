<template>
  <div id="app">
    <!-- <h1>count:{{this.$store.state.count}}</h1>
    <h1>count:{{count}}</h1>
    <button @click="countIncrease1">点我自增</button> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    countIncrease1(){
      // 第一个参数是mutations里定义的函数名字
      // 第二个参数是传入一个值，可以在mutations里面拿到这个值
      const v=2200
      this.$store.commit('countIncrease',v)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
