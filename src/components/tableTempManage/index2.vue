<template>
	<div class="index">
		<el-row>

		  	<el-col :span="24" >
		  		<div class="but-group" style="text-align:right">
		        	<el-input type="text" placeholder="请输入搜索关键词" style="width:200px"></el-input>
		          	<el-button @click.native="add" >搜索</el-button>
        		</div>
		  	</el-col>
		  	<!-- <el-col :span="8" :offset="8">
		  		<div class="but-group" style="text-align:right">
		  			<el-checkbox label="仅显示未创建"></el-checkbox>
        		</div>
		  	</el-col> -->
		</el-row>

		<el-table :data="tableData" style="width: 100%">
    		<el-table-column type="expand">
		      <template scope="scope">
		        <el-form label-position="left" inline class="demo-table-expand" v-if="scope.row.mappingType">
		          <el-form-item label="模板类型">
		            <span>{{ scope.row.mappingType }}</span>
		          </el-form-item>

		          <el-form-item label="最近修改时间">
		            <span>{{ scope.row.updateTime}}</span>
		          </el-form-item>
		          <el-form-item label="模板描述">
		            <span>{{ scope.row.tempDesc }}</span>
		          </el-form-item>
		        </el-form>
		        <span v-else >尚未创建</span>
		      </template>
    		</el-table-column>
    		<el-table-column label="表ID" prop="tableId"></el-table-column>
    		<el-table-column label="表名称" prop="tableName"></el-table-column>
    		<el-table-column label="表描述"  prop="desc"></el-table-column>
        <el-table-column label="所属板块"  prop="board"></el-table-column>
    		<el-table-column label="操作" align="center" property="tableId" width="200px">
	          	<template scope="scope">
			        <el-button v-if="scope.row.mappingType"
			          size="small"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button v-else
			          size="small"
			          type="success"
			          @click="handleCreate(scope.$index, scope.row)">创建</el-button>

			        <el-button
			          size="small"
			          type="primary"
			          @click="handleView(scope.$index, scope.row)">预览</el-button>
			        <el-button
			          size="small"
			          type="danger"
			          @click="handleDelete(scope.$index)">清空</el-button>
      			</template>
	        </el-table-column>
  		</el-table>
	</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
      return {
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
        tempId:row.tableId
      });
      this.$router.push('/tableTempManage/editRowTemp');
      
    },
    handleDelete:function(index){
      //调用接口删除记录
      // this.tableData.splice(index, 1);
    },
    handleView:function(index,row){
      this.$store.commit({
        type:'setCurrentTemp',
        tempId:row.tableId
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

  .demo-table-expand {
    font-size: 0;
    text-align: left;
  }
  .demo-table-expand label {
    width: 100px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
  	margin-left: 75px;
    margin-right: 0;
    margin-bottom: 0;
    width: 40%;
  }

  	.index table .cell{
		text-align: center;
	}

	.index .el-row{
		margin-bottom: 20px;
	}
</style>