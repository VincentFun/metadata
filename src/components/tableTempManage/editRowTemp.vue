<template>
	
	<div class="editRowTemplate">
		<h1>{{tableTemp.tableId}}</h1>
		<h2>{{tableTemp.tableName}}</h2>
		<!-- 批量操作按钮组 -->
		<div>
			<el-button-group>
			  <el-button type="primary" @click.native="dialogFormVisible=true;importSelected=[]">元数据导入</el-button>
			  <el-button type="primary" @click.native="">文件导入</el-button>
<!-- 			  <el-button>文件导入</el-button> -->
<!-- 			  <el-button @click="handleAdd()">新增项目</el-button> -->
<!-- 			  <el-button>新增至选定前</el-button>
			  <el-button>删除选中项</el-button> -->
			</el-button-group>
		</div>
		<el-table :data="getTableData">
			
	        <el-table-column property="itemName" label="项目名称" >
	        	<template scope="scope">
			        <input type="text"  class="el-input__inner" v-model='items[scope.$index]'/>
      			</template>
	    	</el-table-column>
	        <el-table-column property="mappingName" label="映射元数据" >
	        	<template scope="scope">
	        		<span v-if="scope.row.mappingName!=''">{{scope.row.mappingName}}</span>
	        		<!-- <select v-else v-model="mapping[scope.$index]">
	        			<option v-for="opt in selectOptions">{{opt}}</option>
	        		</select> -->
	        		<el-select v-else v-model="mapping[scope.$index]">
	        			<el-option v-for="opt in getRemainOptions" :label="opt.name" :value='opt.name' :key="opt.name"></el-option>
	        		</el-select>
      			</template>
	    	</el-table-column>
	    	<el-table-column  label="操作" align="center" property="id" width="200px">
	          	<template scope="scope">
			        <el-button
			          size="small"
			          @click="handleAdd(scope.$index, scope.row)">新增</el-button>
			        <el-button
			          size="small"
			          type='danger'
			          @click="handleDelete(scope.$index)">删除</el-button>
      			</template>
	        </el-table-column>
	        
		</el-table>

		<div>
			<el-button type="primary" @click="handleView()">预览</el-button>
		</div>
		<!-- 弹框 -->
	    <el-dialog title="批量导入"  v-model="dialogFormVisible" top="35%">
	        <el-form>
	          <el-form-item>
	            <!-- <el-input v-model="dialogForm.name" auto-complete="off" ></el-input> -->
	            <span v-for="opt in getImportOptions">
		            <input type="checkbox"  :value="opt.name" v-model="importSelected">
					<label >{{opt.name}}</label>
				</span>
				
	          </el-form-item>
	        </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click.native="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary"  @click.native="handleImport()">添加</el-button>
                </span>
	    </el-dialog>
	</div>
</template>
<!-- <script src="assets/js/jquery.min.js"></script>
<script src="assets/js/amazeui.min.js"></script> -->
<script>

import $ from 'jquery';
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default{
	name:'tableTempManage',
	data:function(){
		return {
			'items':[],
			'mapping':[],
			'importSelected':[],
			'dialogFormVisible':false
		}
	},
	computed:{
		// ...mapState({
  //     		currentTempId:state=>state.currentTableId
  //    	}),
     	...mapGetters({
	      tableTemp:'getCurrentTemp'
    	}),
    	getImportOptions:{
    		get:function(){
    			var options=[];
    			for(var i=0;i<this.tableTemp.metaData.length;i++){
    				var option={'name':this.tableTemp.metaData[i].name}
    				options.push(option);
    			}
    			return options;
    		}
    	},
       	getTableData:{
       		get:function(){
	       		var tableData=[];
				
				

				for (var i = 0; i < this.items.length; i++) {
					tableData.push({'itemName':this.items[i],'mappingName':this.mapping[i]})
				};
	    
	          	return tableData;
	        },
	        // set:function(newValue){

	        // }
      	},
      	getRemainOptions:{
      		get:function(){
      			// var options=[];
      			// for(var i=0;i<this.mapping.length;i++){
      				
      			// }
      			// 去除已经存在的
      			return this.getImportOptions;
      		}
      	}
    },
    methods:{
		handleAdd:function(index,row){
			// 索引位置, 要删除元素的数量, 元素
			this.items.splice(index,0,'');
			this.mapping.splice(index,0,'');
		},
		handleDelete:function(index){
			this.items.splice(index,1);
			this.mapping.splice(index,1);
		},handleView:function(){
			console.log(this.items)
			console.log(this.mapping)
			// 更新store的columns和mapping属性
			if(this.tableTemp.mappingType=='表格列模板'){
				this.$store.commit({
					type:'updateMapping',
					columns:this.items,
					rows:this.tableTemp.rows,
					mapping:this.mapping
				})
				this.$router.push('/tableTempManage/viewRowTemp');
			}else{
				this.$store.commit({
					type:'updateMapping',
					rows:this.items,
					columns:this.tableTemp.columns,
					mapping:this.mapping
				})
				this.$router.push('/tableTempManage/viewColumnTemp');
			}
		},handleImport:function(){
			//console.log(this.importSelected)
			this.mapping=[];
			this.items=[];		7
			this.dialogFormVisible=false;
			for (var i = 0; i < this.importSelected.length; i++) {
				var item=this.importSelected[i];
				this.items.push(item)
				this.mapping.push(item)
			}
			console.log(this.importSelected)
		}
			
		
	},
	created(){
		// 第一次加载时获取store里的数据
		if(this.tableTemp.mappingType=='表格列模板'){
			this.items=this.tableTemp.columns;
			this.mapping=this.tableTemp.mapping;
		}else if(this.tableTemp.mappingType=='表格行模板'){
			this.items=this.tableTemp.rows;
			this.mapping=this.tableTemp.mapping;
		}

	}

}


</script>
