<template>
	<header>
		<h1>LOGIN</h1>
	</header>
        <input type="text" v-model="value_ID" placeholder="ID" v-on:keyup.enter="addTodo">
		<br>
		<input type="text" v-model="value_PW" placeholder="Password" v-on:keyup.enter="addTodo">	
        <div class="Buttoncontainer">
		<button class="clearAllBtn" @click="login">login</button><br>
		<button class="clearAllBtn" @click="createAccount">Create account</button>
	</div>      
</template>
<script>
    export default{
        name:'Login'
    }
    
</script>
<style>
input: focus{
	outLine :none;
}
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