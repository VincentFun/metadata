//获取表字段信息
// getMetaData/{tableId}

// 示例1
{
	tableId:1
	data:[
		{'id':'fv001_001','name':'合并类型','input':{'type':'select','options':["合并本期","合并上期"]}},
		{'id':'fv001_002','name':'流动资产','input':{'type':'text'}},
		{'id':'fv001_003','name':'非流动资产','input':{'type':'text'}}
	]
}

// 示例2
{
	tableId:2
	data:[
		{'id':'fv002_001','name':'合并类型','input':{'type':'select','options':["合并本期","合并上期"]}},
		{'id':'fv002_002','name':'流动资产','input':{'type':'text'}},
		{'id':'fv002_003','name':'非流动资产','input':{'type':'text'}}
	]
}

// 示例3
{
	tableId:3
	data:[
		{'id':'fv003_001','name':'营业成本','input':{'type':'select','options':["合并本期","合并上期"]}},
		{'id':'fv003_002','name':'营业收入','input':{'type':'text'}},
		{'id':'fv003_003','name':'营业利润','input':{'type':'text'}}
	]
}