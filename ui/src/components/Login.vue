<template>
	<header>
		<h1>LOGIN</h1>
	</header>
     <div class="form-group">
   <label for="id">ID</label>
   <br>
   <input type="text" id="id" v-model="users.userid">
</div>
<div class="form-group">
   <label for="password">Password</label>
   <br>
   <input type="text" id="password" v-model="users.password">
   <br>
	<button v-on:click="logincheck">로그인</button>  
	<br>
	<button v-on:click="CreateAccount">회원가입</button>  
</div>
</template>
<script>
   export default{
		name:'Login',
		data(){
			return{
				users:{
					userid:'',
					password:''
				}
			}
		},
	methods :{
		logincheck : function() {
			console.log(this.users.userid);
			console.log(this.users.password);
		},
		CreateAccount : function(){
			console.log("createaccount");
		}
}
} 
    
</script>
<style>
.inputBox{
	background :white;
	height : 50px;
	line-height : 50px;
	border-radius: 5px;
}
.inputBox input {
	border-style :none;
	font-size: 0.9rem;
}
.addContainer{
	float:right;
	background:linear-gradient(to right, #6478FB, #8764FB);
	display:block;
	width :3rem;
	border-radius: 0 5px 5px 0;
}
.addBtn{
	color: white;
	vertical-align: middle;
}
.clearAllBtn{
		color: #e20303;
		display : black;
	}
    </style>