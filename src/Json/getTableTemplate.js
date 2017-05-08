// 获取表格模板信息
// 输入getTableTemplate/{startPage}/{pageSize}
{
	startPage:1
	pageSize:10
	itemNum:5
	totalNum:5
	data:[{
			'tableId':1
			'tableEngName':'ctb_company_001',
			'tableName':'资产负债表',
			'tableDesc':'资产负债表描述',
			'board':'新三板',

			'tableTempDesc':'资产负债表模板备注',
			'mappingType':'COLUMN',
			'rows':[],
			'columns':['时间','流动资产'],
			// 'mapping':[	'合并类型','流动资产'],
			'mapping':[	'fv001_001','fv001_002'],
			'isFixed':true
	},
	{
		'tableId':2
		'tableTempId':'t002',
		'tableName':'公司十大股东',
		'desc':'公司十大股东描述',
		'board':'新三板',
		'mappingType':'ROW',
		'rows':['股东名次','股东类型','持股数量'],
		'columns':[],
		// 'mapping':[	'合并类型','流动资产'],
		'mapping':[	'fv002_001','fv002_002'],
		'isFixed':false
	},
	{
		'tableId':3
		'tableTempId':'t003',
		'tableName':'利润表',
		'desc':'利润表描述',
		'board':'新三板',
		'mappingType':'COLUMN',
		'rows':[],
		'columns':['营业成本','营业收入','营业利润'],
		// 'mapping':[	'营业成本','营业收入','营业利润'],
		'mapping':[	'fv003_001','fv003_002','fv003_003'],
		'mapping':[	'fv003_001','fv003_002','fv003_003'],
		'isFixed':false
	}]
}