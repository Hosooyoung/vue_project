<template>
	<div class="Buttoncontainer">
		<span class="clearAllBtn" @click="login">login</span><br>
		<span class="clearAllBtn" @click="clearTodo">Create account</span>
	</div>
</template>
<script>
	export default{
		methods:{
			clearTodo(){
				console.log("create Account");
			//	this.$emit('removeAll');
			},
			login(){
				console.log("login");
			//	this.$emit('removeAll');
			}
		}
	}
</script>
<style scoped>
	.Buttoncontainer{
		width:8.5rem;
		height:50px;
		line-height:50px;
		background-color:white;
		border-radius:5px;
		margin:0 auto;
	}
	.clearAllBtn{
		color: #e20303;
		display : black;
	}
</style>