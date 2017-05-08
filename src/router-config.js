import totalPages from './components/tableTempManage/totalPages.vue'
import tableTempManage from './components/tableTempManage/index2.vue'
import editRowTemp from './components/tableTempManage/editRowTemp.vue'
import viewRowTemp from './components/tableTempManage/viewRowTemp.vue'
import viewColumnTemp from './components/tableTempManage/viewColumnTemp.vue'

import tableManage from './components/tableManage/index.vue'

import ruleManage from './components/ruleManage/index.vue'

export default [	
	{
		path:'/tableTempManage',component:totalPages,
		children:[
			{path:'',component:tableTempManage},
			{path:'editRowTemp',component:editRowTemp},
			{path:'viewRowTemp',component:viewRowTemp},
			{path:'viewColumnTemp',component:viewColumnTemp}
		]
	},
	{
		path:'/tableManage',component:tableManage
	},
	{
		path:'/ruleManage',component:ruleManage
	}
]