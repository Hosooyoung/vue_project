<template>
	<div>
    <sidebar></sidebar>
		<h1>공지사항 {{num ? '수정':'등록'}}</h1> 

		<div class="AddWrap">
			<form>
				<table class="tbAdd">
					<colgroup>
						<col width="15%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>제목</th>
						<td><input type="text" v-model="title" ref="title" /></td>
					</tr>
					<tr>
						<th>내용</th>
						<td><textarea v-model="contents" ref="contents"></textarea></td>
					</tr>
				</table>
			</form>
		</div>

		<div class="btnWrap">
			<a href="javascript:;" @click="fnList" class="btn">목록</a>
			<a v-if="!seq" href="javascript:;" @click="fnAddNoti" class="btnAdd btn">등록</a>
			<a v-else href="javascript:;" @click="fnModNoti" class="btnAdd btn">수정</a>
			
		</div>	
	</div>
</template>

<script>
import sidebar from './Sidebar'
export default {
	data() { //변수 생성
		return{
			title:''
			,contents:''
			,id:localStorage.getItem("id")
			,form:'' //form 전송 데이터
			,seq:this.$route.query.seq
			,body:this.$route.query
		}
	},mounted(){
		if(this.seq) {
			this.fnGetView();
		}
	}
	,methods:{
		fnList(){ //리스트 화면으로 이동 함수
			this.$router.push('/info');
			
		}
		,fnAddNoti() { //등록 프로세스
			if(!this.title) { //제목이 없다면 값을 입력하라고 알려준다.
				alert("제목을 입력해 주세요");
				this.$refs.title.focus(); //방식으로 선택자를 찾는다.
				return;
			}

			this.form = { //backend로 전송될 POST 데이터
				title:this.title
				,contents:this.contents
				,id:this.id
			} 
			console.log(this.form);
			this.$http.post('/info/addNotice',this.form)
			.then((res)=>{
				if(res.data.success) {
					alert('등록되었습니다.');
					this.fnList();
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
			
		},fnGetView() {
			this.$http.get('/info/inforead/'+this.body.seq,{params:this.body})
			.then((res)=>{	
				this.data = res.data.data[0];
				this.title = this.data.title;
				this.contents = this.data.contents;
			
			})
			.catch((err)=>{
				console.log(err);
			})
		}
		,fnModNoti() {
			if(!this.title) {
				alert("제목을 입력해 주세요");
				this.$refs.title.focus(); //방식으로 선택자를 찾는다.
				return;
			}
			this.form = {
				title:this.title
				,contents:this.contents
				,id:this.id
				,seq:this.seq
			} 			
			this.$http.post('/info/reNotice',this.form)
			.then((res)=>{
				if(res.data.success) {
					alert('수정되었습니다.');
					this.fnRead();
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
		},
		fnRead() {
			this.$router.push({path:'./inforead',"query":this.body});
		}	


    },
components: {
    //HelloWorld,
    sidebar
  }
}
</script>

<style scoped>
	.AddWrap{margin-left: 300px;}
	.tbAdd{border-top:1px solid #888;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
	.tbAdd td{padding:10px 10px; box-sizing:border-box;}
	.tbAdd td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
	.tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
	.btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px;}
	.btnAdd {background:#43b984}
	.btnDelete{background:#f00;}
</style>