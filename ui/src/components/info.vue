<template>
  <div>
  <Sidebar></Sidebar>
    <p>공지사항</p>
    <button v-on:click="logout">로그아웃</button>
  </div>
</template>
<script>
import Sidebar from './Sidebar'
export default {
 
  data () {
    return {
      
    }
  },
 methods: {
 logout: function () {
     console.log('logout')
    localStorage.removeItem("id")
     localStorage.removeItem("name")
    this.$router.push('/login') 
  }
},
components: {
    //HelloWorld,
    Sidebar
  }
}
</script>