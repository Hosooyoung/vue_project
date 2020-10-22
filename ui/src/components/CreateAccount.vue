<template>
    <div class="input_row">
    <Sidebar></Sidebar>
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
import Sidebar from './Sidebar'
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
},components: {
    //HelloWorld,
    Sidebar
  },
   methods: {
  createAccount: function () {
    this.$http.post('/users/createAcc', { 
      user: this.user
    })
    .then((res) => {
      if (res.data.createsuccess == true) {
        alert(res.data.message);
        this.$router.push('/') 
      }
      if (res.data.createsuccess == false) {
        alert(res.data.message);
        this.user.userid='',
        this.user.name='',
        this.user.password='',
        this.user.phone='',
        this.user.email=''
      }
    })
    .catch(function (error) {
      alert(error)
      this.user.userid='',
        this.user.name='',
        this.user.password='',
        this.user.phone='',
        this.user.email=''
    })
  }
}
}
</script>