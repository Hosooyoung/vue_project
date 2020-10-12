<template>
  <Login></Login>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <Main msg="Welcome to Your Vue.js App"/>
  !-->

</template>
<script>

 console.log("hello");
//import Main from './components/Main.vue'
import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
   // Main,
    Login
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
