<template>
	<div class="ruleManage">
		<h1>规则管理</h1>
		    	<div class="but-group" style="text-align:left">
          <el-button @click.native="add"  type="primary" >新增</el-button>
        </div>

    	<el-table :data="tableData"  style="width: 100%" current-row-key='tableTempId'>
	        <el-table-column property="id" label="Id" ></el-table-column>
	        <el-table-column property="name" label="规则名称" ></el-table-column>
	        <el-table-column property="desc" label="规则描述" ></el-table-column>
	        <el-table-column property="sql" label="SQL语句" width="200px"></el-table-column>
	        <el-table-column  label="操作" align="center" property="tableTempId" width="200px">
	          	<template scope="scope">
			        <el-button
			          size="small"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="small"
			          type="danger"
			          @click="handleDelete(scope.$index, tableData)">删除</el-button>
      			</template>
	        </el-table-column>
      	</el-table>
		
        
        <div style="margin-top:20px">
			     <el-pagination
			      :current-page.sync="currentPage1"
			      :page-size="100"
			      layout="total, prev, pager, next"
			      :total="1000">
			   </el-pagination>
        </div>
	</div>
</template>
<script>
export default{
	data:function(){
		return{
			tableData:[
			{
				'id':'R_001',
				'name':'规则名称1',
				'desc':'规则描述1',
				'sql':'SQL语句1'
			},
			{
				'id':'R_002',
				'name':'规则名称2',
				'desc':'规则描述2',
				'sql':'SQL语句2'
			},
			{
				'id':'R_003',
				'name':'规则名称3',
				'desc':'规则描述3',
				'sql':'SQL语句3'
			}]
		}
	}
}
</script>

