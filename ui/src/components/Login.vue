<template>
 <div>
	<header>
		<h1>LOGIN</h1>
	</header>
   <label for="id">ID</label>
   <br>
   <input type="id" id="id" v-model="user.userid">
	<br>
   <label for="password">Password</label>
   <br>
   <input type="password" id="password" v-model="user.password">
   <br>
	<button v-on:click="login">로그인</button>  
	<br>
	<a href="/create">가입하기</a>  
</div>
</template>
<script>
export default {
    data: function () {
  return {
    user: {
      userid: '',
      password: ''
    }
  } 
},created:function(){
    var check_id=localStorage.getItem("id");
    var check_name=localStorage.getItem("name");
    if(check_id!=null&&check_name!=null){
    localStorage.removeItem("id")
     localStorage.removeItem("name")
    }
},
methods: {
 login: function () {
     console.log('logincheck!!!')
    this.$http.post('/users/logincheck', {
      user: this.user
    })
    .then(
      (res) => {  //로그인 성공
        console.log(res.data.success)
        if (res.data.success == true) {
        alert(res.data.message);
        localStorage.setItem("id" ,this.user.userid)
        localStorage.setItem("name" ,res.data.name)
        this.$router.push('/main') 
      }else
        alert(res.data.message);
      },
      (err) => { // error 를 보여줌
        console.log('err1');
        alert(err);
    })
    .catch(err => {
        console.log('err2');
      alert(err);
    })
  }
}
}
</script>