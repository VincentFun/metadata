<template>
	<div class="viewColumnTemp">
		<h1>预览</h1>
		
		<el-button  @click='handleAdd()' >添加行</el-button>
		<el-button @click='handleDelete()'>删除行</el-button>
		<el-checkbox label='表格是否固定' v-model="isFixed"></el-checkbox>

		<table class='el-table'>
			<tr>
				<td v-for="header,index in getHeader">
					<span>{{header}}</span>
<!-- 					<span v-else-if='rows.length>0&&header!={}'>
						{{header}}
					</span> -->
					<!-- <span v-else>
						<select v-if="header.input.type=='select'" v-model='rows[index-1]'>
							<option v-for='opt in header.input.options'>{{opt}}</option>
						</select>
						<input v-else type="text" />
					</span> -->
					<!-- <input v-else type='text'/> -->
				</td>
			</tr>
			<tr v-for="row,rowIx in getBody">
				<td v-for="td,tdIx in row">
					<span v-if="tdIx==0">
						<select v-if="td.input.type=='select'" v-model='columns[rowIx]'>
							<option v-for='opt in header.input.options'>{{opt}}</option>
						</select>
						<input type='text'  v-else v-model='columns[rowIx]'/>
					</span>
					<span v-else>
						<input type='text'/>
					</span>
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
			columns:[],
			isFixed:false,
		}
	},
	methods:{
		handleAdd:function(){

			this.columns.push("");

		},
		handleDelete:function(){
			this.columns.pop();
			if(this.columns.length==0){
				this.columns.push("");
			}
		},
		handleSave:function(){
			console.log(this.columns)
			console.log(this.isFixed)
			this.$store.commit({
				type:'updateTitlesAndFixed',
				columns:this.columns,
				rows:this.tableTemp.rows,
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

			for (var i = 0; i < this.tableTemp.rows.length; i++) {
				headerData.push(this.tableTemp.rows[i])
			};
			// headerData=this.tableTemp.rows;
			
			return headerData;
		},
		getBody:function(){
			var bodyData=[];

			if(this.columns.length==0){

				bodyData.push(this.mapping);
			}else{
				for(var i=0;i<this.columns.length;i++){
					bodyData.push(this.mapping)
				}	
			}
			return bodyData;
		},
	},
	created(){
		this.columns=this.tableTemp.columns;
		this.isFixed=this.tableTemp.isFixed;
	}
}	
</script>
<style>

</style>