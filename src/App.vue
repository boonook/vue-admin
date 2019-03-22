<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Card>
      <div class="card_div">
          <Icon type="ios-alarm" />
          <h3>测试less</h3>
          <div>
                我的less要测试的内容
          </div>
      </div>
    </Card>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'app',
    data(){
      return{

      }
    },
    components: {
        HelloWorld
    },
    mounted(){
        debugger;
        console.log(this)
    }
}
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .card_div{
      div{
        color:red;
      }
  }
</style>
