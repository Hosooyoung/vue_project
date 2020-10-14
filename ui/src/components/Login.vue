<template>
 <div>
	<header>
		<h1>LOGIN</h1>
	</header>
   <label for="id">ID</label>
   <br>
   <input type="text" id="id" v-model="user.userid">
	<br>
   <label for="password">Password</label>
   <br>
   <input type="text" id="password" v-model="user.password">
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
},
methods: {
 login: function () {
     console.log('logincheck!!!')
    this.$http.post('/api/users/logincheck', {
      user: this.user
    })
    .then(
      (res) => {  //로그인 성공
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