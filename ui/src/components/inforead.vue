<template>
	<div>
		<h1>게시판 상세보기</h1>

		<div class="AddWrap">
			<form>
				<table class="tbAdd">
					<colgroup>
						<col width="15%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>제목</th>
						<td>{{title}}</td>
					</tr>
					<tr>
						<th>내용</th>
						<td class="txt_cont" v-html="contents"></td>
					</tr>
				</table>
			</form>
		</div>
		<button @click="fnList" class="btnRightWrap">목록</button>
		<button @click="fnMod" class="btnRightWrap">수정</button>
		<button @click="fnDel" class="btnRightWrap">삭제</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			body:this.$route.query
			,data:''
			,title:''
			,contents:''
			,seq:this.$route.query.seq
		}
	}
	,mounted() {
		this.fnGetView();
	}
	,methods:{
		fnGetView() {
			this.$http.get('/info/inforead/'+this.body.seq,{params:this.body})
			.then((res)=>{	
				this.data = res.data.data[0];
				this.title = this.data.title;
				this.contents = this.data.contents.replace(/(\n)/g,'<br/>');
				console.log('바디쉑 :'+this.body.seq)
				console.log('쿼리쉑 :'+this.$route.query.seq)
			})
			.catch((err)=>{
				console.log(err);
			})
		}
		,fnList(){
			delete this.body.seq;
			this.$router.push({path:'./info',query:this.body});
		},fnMod() {
			this.$router.push({path:'./infowrite',query:this.body}); //등록화면으로 이동하면서 파라미터를 넘겨준다.
		},
		fnDel(){
			console.log('델델덷ㄹ델');
		this.$http.post('/info/DelNoti',{params:this.body.seq})
			.then((res)=>{	
				if(res.data.success) {
					this.$http.get('/modSeq');
					alert('삭제되었습니다.');
					this.$router.push('/info');
				}
			})
			.catch((err)=>{
				console.log(err);
			})
		}
		
    
	}
}
</script>

<style scoped>
	.tbAdd{border-top:1px solid #888;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0; }
	.tbAdd td{padding:10px 10px; box-sizing:border-box; text-align:left;}
	.tbAdd td.txt_cont{height:300px; vertical-align:top;}
	.btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px;}
	.btnAdd {background:#43b984}
	.btnDelete{background:#f00;}
</style>