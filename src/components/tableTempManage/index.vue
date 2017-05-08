<template>
    <div class="tableTempManage">
    	<!-- <h1>采集模板元素管理</h1> -->

		<el-row>
			<el-col :span="8" style="text-align:left">
				<el-button  type="primary" @click.native="dialogFormVisible=true;">新增</el-button>
			</el-col>
		  	<el-col :span="8" :offset="8">
		  		<div class="but-group" style="text-align:right">
		        	<el-input type="text" placeholder="请输入搜索关键词" style="width:200px"></el-input>
		          	<el-button @click.native="add" >搜索</el-button>
        		</div>
		  	</el-col>
		</el-row>

        

    	<el-table :data="tableData"  style="width: 100%" current-row-key='tableTempId'>
	        <el-table-column property="tableTempId" label="Id" ></el-table-column>
	        <el-table-column property="tableName" label="表名称" ></el-table-column>
	        <el-table-column property="mappingType" label="模板类型" ></el-table-column>
	        <el-table-column property="desc" label="描述" width="200px"></el-table-column>
	        <el-table-column property="board" label="板块标签" ></el-table-column>
	        <el-table-column  label="操作" align="center" property="tableTempId" width="200px">
	          	<template scope="scope">
			        <el-button
			          size="small"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="small"
			          type="danger"
			          @click="handleDelete(scope.$index)">删除</el-button>
			        <el-button
			          size="small"
			          type="primary"
			          @click="handleView(scope.$index, scope.row)">预览</el-button>
      			</template>
	        </el-table-column>
      	</el-table>
		
        
       <!--  <div style="margin-top:20px">
        	  <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage1"
			      :page-size="100"
			      layout="total, prev, pager, next"
			      :total="1000">
			   </el-pagination>
			     <el-pagination
			      :current-page.sync="currentPage"
			      :page-size="100"
			      layout="total, prev, pager, next"
			      :total="1000">
			   </el-pagination>
        </div> -->

        <!-- 弹框 -->
	    <el-dialog title="创建模板"  v-model="dialogFormVisible" top="35%">
	        <el-form :model="createData" label-width="120px">
		        <el-form-item label="请选择表名">
			    <select v-model="createData.tableName">
			    	<option label="请选择表名" value=""></option>
	            	<option label="资产负债表" value="t001"></option>
			      	<option label="股本变动表" value="t002"></option>
	            </select>
				</el-form-item>
				<el-form-item label="描述信息">
				 	<el-input v-model="createData.desc"></el-input>
				</el-form-item>
				<el-form-item label="请选择表名">
				    <el-select v-model="createData.type" placeholder="请输入模板描述">
		            	<el-option label="表格行模板" value="ROW"></el-option>
				      	<el-option label="表格列模板" value="COLUMN"></el-option>
				      	<el-option label="表格模板" value="TABLE"></el-option>
		            </el-select>
				</el-form-item>
	        </el-form>
            <span slot="footer" class="dialog-footer">
	                <el-button @click.native="dialogFormVisible = false">取 消</el-button>
	                <el-button type="primary"  @click="handleCreate()">创建</el-button>
        	</span>
	    </el-dialog>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
	name:'tableTempManage',
	data:function(){
		return{
			// 'currentPage':1
			dialogFormVisible:false,
			createData:{
				tableName:'',
				desc:'',
				type:''
			}
		}
	},
	computed:{
      ...mapState({
      		tableData:state=>state.tableTemps
      })
	},
	methods:{
		handleEdit:function(index,row){
			this.$store.commit({
				type:'setCurrentTemp',
				tempId:row.tableTempId
			});
			this.$router.push('/tableTempManage/editRowTemp');
			
		},
		handleDelete:function(index){
			//调用接口删除记录
			this.tableData.splice(index, 1);
		},
		handleView:function(index,row){
			this.$store.commit({
				type:'setCurrentTemp',
				tempId:row.tableTempId
			});
			this.$router.push('/tableTempManage/viewRowTemp');
		},
		handleCreate:function(){
			// 调用接口
			console.log(this.createData);
		}
	}
}
</script>
<style>
	.tableTempManage table .cell{
		text-align: center;
	}

	.tableTempManage .el-row{
		margin-bottom: 20px;
	}
</style>