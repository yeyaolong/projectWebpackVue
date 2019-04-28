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
/**
 * 路由测试
 */
const routerTest = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest')), 'syntax');
const routerTest1 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest1')), 'syntax');
const routerTest2 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest2')), 'syntax');
const routerTest3 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest3')), 'syntax');
const routerTest4 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest4')), 'syntax');
const routerTest5 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest5')), 'syntax');
const routerTest6 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest6')), 'syntax');
const routerTest7 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest7')), 'syntax');
const routerTest8 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest8')), 'syntax');

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
      { path: '/directive/:type', name: 'directive', component: directive, meta: { title: 'Vue指令', requireLogin: false}},
      {
        path: '/routerTest',
        name: 'routerTest',
        component: routerTest,
        meta: { title: '路由基础', requireLogin: false},
        children: [
          {
            name: 'routerTest1',
            path: '/routerTest1',
            component: routerTest1,
            meta: { title: '路由基础1', requireLogin: false}
          },
          {
            name: 'routerTest2',
            path: '/routerTest2/:id',
            component: routerTest2,
            meta: { title: '路由基础2', requireLogin: false}
          },
          {
            name: 'routerTest3',
            path: '/routerTest3',
            component: routerTest3,
            meta: { title: '路由基础3', requireLogin: false}
          },
          {
            name: 'routerTest4',
            path: '/routerTest4',
            component: routerTest4,
            meta: { title: '路由基础4', requireLogin: false},
            props: {id: '123'}
          },
          {
            name: 'routerTest5',
            path: '/routerTest5',
            component: routerTest5,
            meta: { title: '路由基础5', requireLogin: false}
          },
          {
            name: 'routerTest6',
            path: '/routerTest6',
            component: routerTest6,
            meta: { title: '路由基础6', requireLogin: false}
          },
          {
            name: 'routerTest7',
            path: '/routerTest7',
            component: routerTest7,
            meta: { title: '路由基础7', requireLogin: false}
          },
          {
            name: 'routerTest8',
            path: '/routerTest8',
            component: routerTest8,
            meta: { title: '路由基础8', requireLogin: false}
          }
        ]
      },
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
