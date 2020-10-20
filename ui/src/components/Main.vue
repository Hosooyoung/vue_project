<template>
  <div>
    <p>메인화며어언</p>
    <button v-on:click="logout">로그아웃</button>
  </div>
</template>
<script>
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
    this.$router.push('/') 
  }
}
}
</script>