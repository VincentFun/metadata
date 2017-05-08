import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	tableTemps:[
		{
			'tableId':'t001',
			'tableName':'资产负债表',
			'desc':'资产负债表描述',
			'board':'新三板',
			'tempDesc':'资产负债表模板描述',
			'mappingType':'表格列模板',
			'rows':[],
			'columns':['时间','流动资产'],
			'mapping':[	'合并类型','流动资产'],
			'metaData':[
				{'id':'fv001_001','name':'合并类型','input':{'type':'select','options':["合并本期","合并上期"]}},
				{'id':'fv001_001','name':'流动资产','input':{'type':'text'}},
				{'id':'fv001_001','name':'非流动资产','input':{'type':'text'}}
			],
			'isFixed':true,
			'updateTime':'2017-05-07'
		},
		{
			'tableId':'t002',
			'tableName':'公司十大股东',
			'desc':'公司十大股东描述',
			'board':'新三板',
			'tempDesc':'公司十大股东模板描述',
			'mappingType':'表格行模板',
			'rows':['序号','股东类型','期末持股数量'],
			'columns':[],
			'mapping':[	'股东名次','股东类型','持股数量'],
			'metaData':[
				{'id':'fv002_001','name':'股东名次','input':{'type':'text'}},
				{'id':'fv002_002','name':'股东类型','input':{'type':'text'}},
				{'id':'fv002_003','name':'持股数量','input':{'type':'text'}}
			],
			'isFixed':false,
			'updateTime':'2017-05-07'
		},
		{
			'tableId':'t003',
			'tableName':'利润表',
			'desc':'利润表描述',
			'board':'新三板',
			'tempDesc':'公司十大股东模板描述',
			'mappingType':'表格列模板',
			'rows':[],
			'columns':['营业成本','营业收入','营业利润'],
			'mapping':[	'营业成本','营业收入','营业利润'],
			'metaData':[
				{'id':'fv001_001','name':'营业成本','input':{'type':'select','options':["合并本期","合并上期"]}},
				{'id':'fv001_001','name':'营业收入','input':{'type':'text'}},
				{'id':'fv001_001','name':'营业利润','input':{'type':'text'}}
			],
			'isFixed':false,
			'updateTime':'2017-05-07'
		},
		{
			'tableId':'t004',
			'tableName':'主要财务指标表',
			'desc':'主要财务指标表描述',
			'board':'新三板',
			'tempDesc':'',
			'mappingType':'',
			'rows':[],
			'columns':[],
			'mapping':[],
			'metaData':[
				{'id':'fv001_001','name':'营业成本','input':{'type':'select','options':["合并本期","合并上期"]}},
				{'id':'fv001_001','name':'营业收入','input':{'type':'text'}},
				{'id':'fv001_001','name':'营业利润','input':{'type':'text'}}
			],
			'isFixed':'',
			'updateTime':''
		},
		{
			'tableId':'t005',
			'tableName':'主要财务指标表',
			'desc':'主要财务指标表描述',
			'board':'新三板',
			'tempDesc':'',
			'mappingType':'',
			'rows':[],
			'columns':[],
			'mapping':[],
			'metaData':[
				{'id':'fv001_001','name':'营业成本','input':{'type':'select','options':["合并本期","合并上期"]}},
				{'id':'fv001_001','name':'营业收入','input':{'type':'text'}},
				{'id':'fv001_001','name':'营业利润','input':{'type':'text'}}
			],
			'isFixed':'',
			'updateTime':''
		}
		
	],
	currentTableId:''
}

const getters={
	getCurrentTemp(state){
		// return state.tableTemps;
		return state.tableTemps.find(tableTemp=>{
			return tableTemp.tableId==state.currentTableId;
		});
	},
	getMappingData(state){
		var tableTemp=state.tableTemps.find(tableTemp=>{
			return tableTemp.tableId==state.currentTableId;
		});
		var mappingDatas=[];
		for(var i=0;i<tableTemp.mapping.length;i++){
			var mappingData=tableTemp.metaData.find(mappingData=>{
				return mappingData.name==tableTemp.mapping[i];
			});
			mappingDatas.push(mappingData);
		}
		return mappingDatas;
	}
}

const mutations={
	setCurrentTemp(state,payload){
		state.currentTableId=payload.tempId
	},
	updateMapping(state,payload){
		var tableTemp=state.tableTemps.find(tableTemp=>{
			return tableTemp.tableId==state.currentTableId;
		});
		tableTemp.columns=payload.columns;
		tableTemp.rows=payload.rows;
		tableTemp.mapping=payload.mapping;
		// console.log(tableTemp);
		
	},
	updateTitlesAndFixed(state,payload){
		var tableTemp=state.tableTemps.find(tableTemp=>{
			return tableTemp.tableId==state.currentTableId;
		});
		tableTemp.rows=payload.rows;
		tableTemp.columns=payload.columns;
		tableTemp.isFixed=payload.isFixed;
	}
}

const actions={

}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})



