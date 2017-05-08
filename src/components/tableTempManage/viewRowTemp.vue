<template>
	<div class="viewRowTemp">
		<h1>预览</h1>
		
		<el-button  @click='handleAdd()' >添加列</el-button>
		<el-button @click='handleDelete()'>删除列</el-button>
		<el-checkbox label='表格是否固定' v-model="isFixed"></el-checkbox>

		<table class='el-table'>
			<tr>
				<td v-for="header,index in getHeader">
					<span v-if='index==0'>{{header}}</span>
<!-- 					<span v-else-if='rows.length>0&&header!={}'>
						{{header}}
					</span> -->
					<span v-else>
						<select v-if="header.input.type=='select'" v-model='rows[index-1]'>
							<option v-for='opt in header.input.options'>{{opt}}</option>
						</select>
						<input v-else type="text" />
					</span>
<!-- 					<input v-else type='text'/>  -->
				</td>
			</tr>
			<tr v-for="row in getBody">
				<td v-for="td,index in row">
					<span v-if='index==0'>{{td}}</span>
					<input type='text'  v-else/>
				</td>
			</tr>
		</table>

		<el-button @click='handleSave()'>保存</el-button>
		<!-- <form>
			<input type="checkbox"/>表格是否固定
		</form> -->
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
	data:function(){
		return {
			rows:[],
			isFixed:false,
		}
	},
	methods:{
		handleAdd:function(){

			this.rows.push("");

		},
		handleDelete:function(){
			this.rows.pop();
			if(this.rows.length==0){
				this.rows.push("");
			}
		},
		handleSave:function(){
			console.log(this.rows)
			console.log(this.isFixed)
			this.$store.commit({
				type:'updateTitlesAndFixed',
				rows:this.rows,
				columns:this.tableTemp.columns,
				isFixed:this.isFixed
			})
			this.$router.push('/tableTempManage');
		}
	},
	computed:{
		...mapGetters({
	      tableTemp:'getCurrentTemp',
	      mapping:'getMappingData'
    	}),
		getHeader:function(){
			var headerData=[];

			headerData.push(this.tableTemp.columns[0])
			if(this.rows.length==0){
				headerData.push(this.mapping[0]);
			}else{
				for(var i=0;i<this.rows.length;i++){
					headerData.push(this.mapping[0])
				}	
			}
			return headerData;
		},
		getBody:function(){
			var bodyData=[];

			for (var i = 1; i < this.tableTemp.columns.length; i++) {
				var row=[];//每一行的单元格
				row.push(this.tableTemp.columns[i])
				var tdLength;//每一行单元格数量
				if(this.rows.length==0){
					tdLength=1;
				}else{
					tdLength=this.rows.length;
				}
				for (var j = 0; j <tdLength; j++) {
					row.push(this.mapping[i])
				};
				bodyData.push(row);
			};
			return bodyData;
		},
	},
	created(){
		this.rows=this.tableTemp.rows;
		this.isFixed=this.tableTemp.isFixed;
	}
}	
</script>
<style>

</style>