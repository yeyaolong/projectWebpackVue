import Mock from 'mockjs'
import exampleAPI from './example'

export default {
	startMock(){
		Mock.setup({
		  timeout: '1350-1600'
		})

		// 模拟请求数据
		Mock.mock(/\/example\/login/, 'post', exampleAPI.login);
		Mock.mock(/\/example\/getTable/, 'get', exampleAPI.getTable);
		Mock.mock(/\/api\/getOptions/, 'get', exampleAPI.getOptions);
		Mock.mock(/\/api\/getArticleDetail/, 'get', exampleAPI.getArticleDetail);
		Mock.mock(/\/api\/getDemoList/, 'get', exampleAPI.getDemoList);
		Mock.mock(/\/api\/getDirectiveMenu/, 'get', exampleAPI.getDirectiveMenu)
	}
}
