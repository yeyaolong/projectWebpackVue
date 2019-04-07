import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

const AppView = r => require.ensure([], () => r(require('@/views/components/app-view')), 'AppView');
const home = r => require.ensure([], () => r(require('@/views/home/home')), 'home');
const table = r => require.ensure([], () => r(require('@/views/example/table')), 'table');
const form = r => require.ensure([], () => r(require('@/views/example/form')), 'table');
const life = r => require.ensure([], () => r(require('@/views/example/life')), 'life');
const syntax = r => require.ensure([], () => r(require('@/views/example/syntax')), 'syntax');
const articleDetail = r => require.ensure([], () => r(require('@/views/example/articleDetail')), 'syntax');
const directive = r => require.ensure([], () => r(require('@/views/example/directive/directive')), 'syntax');

const login = r => require.ensure([], () => r(require('@/views/common/login')), 'login');
const Error = r => require.ensure([], () => r(require('@/views/common/notfound')), 'error');

Vue.use(Router);
const routers = [
	{
		path: '',
		component: AppView,
		children: [
			{ path: '/', name: 'home', component: home, meta: { title: '首页', requireLogin: true } }, //首页
      { path: '/table', name: 'table', component: table, meta: { title: 'table', requireLogin:true }},
			{ path: '/form', name: 'form', component: form, meta: { title: 'form', requireLogin: true } },
			{ path: '/life', name: 'life', component: life, meta: { title: 'life', requireLogin: true } },
			{ path: '/syntax', name: 'syntax', component: syntax, meta: { title: 'syntax', requireLogin: false } },
			{ path: '/article/:article_id', name: 'articleDetail', component: articleDetail, meta: { title: '详细页', requireLogin: false } },
      { path: '/directive/:type', name: 'directive', component: directive, mata: { title: 'Vue指令', requireLogin: false}}
    ]
  },
	{ path: '/login', name: 'login', component: login, meta: { title: '登录', requireLogin:false } }, //登录
	{ path: '*', name: '404', component: Error, meta: { title: '404', requireLogin:false }} // 404
];

const router = new Router({
	// mode: 'history',
	scrollBehavior:()=>({y:0}),
	routes: routers
});

// 路由跳转之前
router.beforeEach((to, from, next) => {
	// 显示loading过渡效果
	store.dispatch("ChangeLoading", true);

	if (to.meta.requireLogin) {   // 判断该路由是否需要登录权限
		if (!window.sessionStorage) {
			Message({
				showClose: true,
				message: "浏览器不支持本地存储功能，建议您使用chrome浏览器效果更佳！",
				type: "error"
			});
			return false;
		}
		if (window.sessionStorage.getItem("loginUserBaseInfo")) {  // 判断本地存储是否存在用户信息
			next();
		} else {  // 没有用户信息则跳转到登录界面
			store.dispatch("ChangeLoading", false);
			next({
				path: "/login"
			});
		}
	} else { // 路由不需要登录 直接跳转
		next();
	}
	// 更新页面title
	window.document.title = to.meta.title ? `${to.meta.title}--BSS` : 'BSS'
});


// 路由跳转之后
router.afterEach(function (to) {
	// 关闭loading过渡效果
	store.dispatch("ChangeLoading", false);
});
export default router;
