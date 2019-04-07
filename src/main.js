import Vue from 'vue'
import '@/assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import MockMachine from './mock'  		// 请求使用mockjs模拟


Vue.config.productionTip = false
Vue.use( ElementUI );

/**在生产环境下，才执行Mock代码**/
if (process.env.NODE_ENV == 'development' ){
    MockMachine.startMock();
}



let vm = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
