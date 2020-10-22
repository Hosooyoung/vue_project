<template>
  <div>
    <div class='left'>
      <ul>
        <li id='logo'>
          <div>Menu</div>
        </li>
        <li>
	<a href="/main">메인화면</a></li>
        <li>
	<a href="/info">공지사항</a> </li>
        <li>
	<a href="/board">게시판</a></li>
        <li>
	<a href="/todo">캘린더</a> </li>
        <br>
        <br><br><br><br>
        <br><br><br><br>
        <br><br><br><br>
        <li> <button v-on:click="logout">로그아웃</button></li>
      </ul>
    </div>
     </div>
</template>
<script>
export default {
  name: 'left',
  data () {
    return {}
  },
 methods: {
 logout: function () {
     console.log('logout')
    localStorage.removeItem("id")
     localStorage.removeItem("name")
    this.$router.push('/') 
  }
},

  
}
</script>
<style>
  a{color:black}
  a:hover{color:rgb(0,0,0);}
  .left{
    position:fixed; 
    top:0px; 
    left:0px; 
    width:250px; 
    height:1000px; 
    background:rgba(255,255,255); 
    padding:40px 0; 
    overflow: hidden
  }
  .left ul {padding: 0 25px}
  .left ul li { font-size:20px;  height:75px;} 
  .left ul li#logo {font-family: 'Passion One', cursive; font-size:50px; height:170px;}
  .left ul li#logo div {line-height: 0.8}
  
</style>