import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import { setStore, getStore } from '@/common/js/storage';
import router from '@/router'

// 创建axios实例
const Axios = axios.create();

// 根据不同模式切换不同的路径
if (process.env.NODE_ENV == 'development') {
    Axios.defaults.baseURL = '/';
} else if (process.env.NODE_ENV == 'debug') {
    Axios.defaults.baseURL = '/';
} else if (process.env.NODE_ENV == 'production') {
    Axios.defaults.baseURL = '/';
}
Axios.defaults.timeout = 50000; // 超时时间
Axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
Axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
Axios.defaults.responseType = 'json'; // 返回数据类型

function mesError(msg){
	Message({
		showClose: true,
		message: msg,
		type: "error"
	});
}

// POST等传参序列化(添加请求拦截器)
Axios.interceptors.request.use(config => {
	// 在发送请求之前做某件事
	if ( config.method === "post" || config.method === "put" || config.method === "delete" ){
		// 序列化
		console.log(config.data);
		console.log(typeof config.data);
		config.data = qs.stringify(config.data);
		
		console.log(config.data);
		console.log(typeof config.data);
	}
	// 若是有做鉴权token , 就给头部带上token
	// if (localStorage.token) {
	//   config.headers.Authorization = localStorage.token;
	// }
	return config;
}, error => {
	//  饿了么的消息弹窗组件,类似toast
	let msg = "Before Ajax Error";
	mesError(msg);
	return Promise.reject(msg)
});

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use( res => {
	let resData = res.data;
	// 非正确格式，没有code
	if (!resData.code) {
		let msg = "请求返回格式错误，请检查数据！";
		mesError(msg);
		return Promise.reject(msg)
	};
	// 200: 请求处理成功
	if (resData.code == 200) {
		return res;
	};
	// 500: 请求处理失败  406: 请求未授权
	if (resData.code == 500 || resData.code == 406 ) {
		let msg = resData.data.message
			? resData.data.message
			: "请求处理失败！"
		mesError(msg);
		return Promise.reject(msg)
	};
	// 401: 请求未认证，跳转登录页
	if (resData.code == 401) {
		let msg = resData.data.message
			? resData.data.message
			: "请求未认证，请先登录！"
		mesError(msg);
		router.push({
			path: "/login"
		});
		return Promise.reject(msg)
	};
	let msg = "code格式错误！"
	mesError(msg);
	return Promise.reject(msg);
}, error => {
	if (error && error.response) {
		switch (error.response.status) {
			case 400: error.message = '请求错误(400)'; break;
			case 401: error.message = '未授权，请重新登录(401)'; break;
			case 403: error.message = '拒绝访问(403)'; break;
			case 404: error.message = '请求出错(404)'; break;
			case 408: error.message = '请求超时(408)'; break;
			case 500: error.message = '服务器错误(500)'; break;
			case 501: error.message = '服务未实现(501)'; break;
			case 502: error.message = '网络错误(502)'; break;
			case 503: error.message = '服务不可用(503)'; break;
			case 504: error.message = '网络超时(504)'; break;
			case 505: error.message = 'HTTP版本不受支持(505)'; break;
			default: error.message = `连接出错(${error.response.status})!`;
		}
	} else {
		error.message = '连接服务器失败!'
	}
	mesError(error.message);
	return Promise.reject(error.message)
});

export default Axios;
