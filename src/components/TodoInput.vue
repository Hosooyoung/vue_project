<template>
	<div class="inputBox shadow">
		<input type="text" v-model="newTodoItem" placeholder="ID" v-on:keyup.enter="addTodo">
		<br>
		<input type="text" v-model="newTodoItem" placeholder="Password" v-on:keyup.enter="addTodo">		
		<span class="addContainer" v-on:click="addTodo">
		<i class="addBtn fas fa-plus" aria-hidden="true"></i>
	</span>
	<modal v-if="showModal" @close="showModal=false">
		<h3 slot="header">경고</h3>
		<span slot="footer" @click="showModal=false">
			할일
			<i class="closeModalBtn fas fa fa-times" aria-hidden="true"></i>
		</span>
	</modal>
	</div>
</template>
<script>
import Modal from './common/Modal.vue'
	export default{
		data(){
			return{
				newTodoItem:'',
				showModal: false
			}
		}
		,
		methods: {
			addTodo(){
				if(this.newTodoItem !==""){
					var value =this.newTodoItem && this.newTodoItem.trim();
					console.log(this.newTodoItem);
					this.$emit('addTodo',value);
					this.clearInput();
				}
				else{
					this.showModal= !this.showModal;
				}
			},
			components: {
				Modal : Modal
			},
			clearInput(){
				this.newTodoItem='';
			}
		}
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
	backgrou~nd:linear-gradient(to right, #6478FB, #8764FB);
	display:block;
	width :3rem;
	border-radius: 0 5px 5px 0;
}
.addBtn{
	color: white;
	vertical-align: middle;
}
</style>