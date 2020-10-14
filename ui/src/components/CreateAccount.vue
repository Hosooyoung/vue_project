<template>
    <div class="input_row">
  <label for="id">아이디</label>
  <input type="text" id="id" v-model="user.userid">
<br>
   <label for="name">이름</label>
   <input type="text" id="name" v-model="user.name">
<br>
   <label for="password">비밀번호</label>
   <input type="password" id="password" v-model="user.password">
<br>
   <label for="phone">전화번호</label>
   <input type="phone" id="phone" v-model="user.phone">
<br>
  <label for="email">e메일</label>
   <input type="email" id="email" v-model="user.email">
<br>
<button v-on:click="createAccount">가입하기</button> 
</div>
</template>
<script>
export default {
    data: function () {
  return {
    user: {
      userid: '',
      name: '',
      password: '',
      phone: '',
      email: ''

    }
  }
},
   methods: {
  createAccount: function () {
    this.$http.post('/api/users/createAcc', { 
      user: this.user
    })
    .then((res) => {
      if (res.data.success == true) {
        alert(res.data.message);
        this.$router.push('/') 
      }
      if (res.data.success == false) {
        alert(res.data.message);
      }
    })
    .catch(function (error) {
      alert(error)
    })
  }
}
}
</script>