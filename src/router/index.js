import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

/**
 * 使用require 做异步组件引入
 */
// const AppView = r => require.ensure([], () => r(require('@/views/components/app-view')), 'AppView');
// const home = r => require.ensure([], () => r(require('@/views/home/home')), 'home');
// const table = r => require.ensure([], () => r(require('@/views/example/table')), 'table');
// const form = r => require.ensure([], () => r(require('@/views/example/form')), 'table');
// const life = r => require.ensure([], () => r(require('@/views/example/life')), 'life');
// const syntax = r => require.ensure([], () => r(require('@/views/example/syntax')), 'syntax');
// const articleDetail = r => require.ensure([], () => r(require('@/views/example/articleDetail')), 'syntax');
// const directive = r => require.ensure([], () => r(require('@/views/example/directive/directive')), 'syntax');
/**
 * 路由基础 跳转、传参、取参
 */
// const routerTest = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest')), 'syntax');
// const routerTest1 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest1')), 'syntax');
// const routerTest2 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest2')), 'syntax');
// const routerTest3 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest3')), 'syntax');
// const routerTest4 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest4')), 'syntax');
// const routerTest5 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest5')), 'syntax');
// const routerTest6 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest6')), 'syntax');
// const routerTest7 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest7')), 'syntax');
// const routerTest8 = r => require.ensure([], () => r(require('@/views/example/router/base/routerTest8')), 'syntax');
/**
 * 路由进阶 路由组件传参（布尔模式、对象模式、函数模式）
 */
// const paramRouter = r => require.ensure([], () => r(require('@/views/example/router/advanced/param/paramRouter')), 'syntax');
// const paramNotDecoupling = r => require.ensure([], () => r(require('@/views/example/router/advanced/param/paramNotDecoupling')), 'syntax');
// const paramDecoupling = r => require.ensure([], () => r(require('@/views/example/router/advanced/param/paramDecoupling')), 'syntax');
// const paramBoolean = r => require.ensure([], () => r(require('@/views/example/router/advanced/param/paramBoolean')), 'syntax');
// const paramBooleanFalse = r => require.ensure([], () => r(require('@/views/example/router/advanced/param/paramBooleanFalse')), 'syntax');
// const paramObject = r => require.ensure([], () => r(require('@/views/example/router/advanced/param/paramObject')), 'syntax');
// const paramMethod = r => require.ensure([], () => r(require('@/views/example/router/advanced/param/paramMethod')), 'syntax');
// const paramGuard = r => require.ensure([], () => r(require('@/views/example/router/advanced/guard/paramGuard')), 'syntax');
// const paramBeforeEach = r => require.ensure([], () => r(require('@/views/example/router/advanced/guard/beforeEach')), 'syntax');
// const paramBeforeResolve = r => require.ensure([], () => r(require('@/views/example/router/advanced/guard/beforeResolve')), 'syntax');
// const paramAfterEach = r =>require.ensure([], () => r(require('@/views/example/router/advanced/guard/afterEach')), 'syntax');
// const paramBeforeEnter = r =>require.ensure([], () => r(require('@/views/example/router/advanced/guard/beforeEnter')), 'syntax');
// const paramGuardInComponent = r =>require.ensure([], () => r(require('@/views/example/router/advanced/guard/guardInComponent')), 'syntax');

// const login = r => require.ensure([], () => r(require('@/views/common/login')), 'login');
// const Error = r => require.ensure([], () => r(require('@/views/common/notfound')), 'error');

// 使用import 做异步组件引入
const AppView = () => import(/* webpackChunkName: 'AppView' */ '@/views/components/app-view');
const home = () => import(/* webpackChunkName: 'home' */ '@/views/home/home');
const table = () => import(/* webpackChunkName: 'table' */ '@/views/example/table');
const form = () => import(/* webpackChunkName: 'table' */ '@/views/example/form');
const life = () => import(/* webpackChunkName: 'life' */ '@/views/example/life');
const syntax = () => import(/* webpackChunkName: 'syntax' */ '@/views/example/syntax')
const articleDetail = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/articleDetail')
const directive = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/directive/directive')
/**
 * 路由基础 跳转、传参、取参
 */
const routerTest = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/base/routerTest')
const routerTest2 = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/base/routerTest1')
const routerTest3 = import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/base/routerTest3')
const routerTest4 = import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/base/routerTest4')
const routerTest5 = import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/base/routerTest5')
const routerTest6 = import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/base/routerTest6')
const routerTest7 = import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/base/routerTest7')
const routerTest8 = import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/base/routerTest8')
/**
 * 路由进阶 路由组件传参（布尔模式、对象模式、函数模式）
 */
const paramRouter = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/param/paramRouter');
const paramNotDecoupling = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/param/paramNotDecoupling');
const paramDecoupling = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/param/paramDecoupling');
const paramBoolean = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/param/paramBoolean');
const paramBooleanFalse = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/param/paramBooleanFalse');
const paramObject = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/param/paramObject');
const paramMethod = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/param/paramMethod');
const paramGuard = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/guard/paramGuard')
const paramBeforeEach = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/guard/beforeEach')
const paramBeforeResolve = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/guard/beforeResolve')
const paramAfterEach = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/guard/afterEach')
const paramBeforeEnter = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/guard/beforeEnter')
const paramGuardInComponent = () => import(/* webpackChunkName: 'syntax'*/ '@/views/example/router/advanced/guard/guardInComponent')

const login = () => import(/* webpackChunkName: 'login'*/ '@/views/common/login')
const Error = () => import(/* webpackChunkName: 'error'*/ '@/views/common/notfound')

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
      {
        path: '/paramRouter',
        name: 'paramRouter',
        component: paramRouter,
        meta: { title: '路由进阶', requireLogin: false},
        children: [
          { path: '/paramNotDecoupling/:id', name: 'paramNotDecoupling', component: paramNotDecoupling, meta: { title: '路由参数未解耦', requireLogin: false}},
          { path: '/paramDecoupling/:id', name: 'paramDecoupling', component: paramDecoupling, props: true, meta: { title: '路由参数已解耦', requireLogin: false}},
          { path: '/paramBoolean/:id', name: 'paramBoolean', component: paramBoolean, props: true, meta: { title: '路由参数 布尔模式', requireLogin: false}},
          { path: '/paramBooleanFalse/:id', name: 'paramBooleanFalse', component: paramBooleanFalse, props: false, meta: { title: '路由参数 布尔模式', requireLogin: false}},
          { path: '/paramObject', name: 'paramObject', component: paramObject, props: {id: 123, article: 'hello world'}, meta: { title: '路由参数 对象模式', requireLogin: false}},
          { path: '/paramMethod', name: 'paramMethod', component: paramMethod, props: (route) => ({ query: route.query }), meta: { title: '路由参数 函数模式', requireLogin: false}}
        ]
      },
      {
        path: '/paramGuard',
        name: 'paramGuard',
        component: paramGuard,
        props: (route) => ({ query: route.query }),
        meta: { title: '路由参数 守卫者模式', requireLogin: false},
        children: [
          {
            path: '/paramBeforeEach',
            name: 'paramBeforeEach',
            component: paramBeforeEach,
          },
          {
            path: '/paramBeforeResolve',
            name: 'paramBeforeResolve',
            component: paramBeforeResolve,
          },
          {
            path: '/paramAfterEach',
            name: 'paramAfterEach',
            component: paramAfterEach,
          },
          {
            path: '/paramBeforeEnter',
            name: 'paramBeforeEnter',
            component: paramBeforeEnter,
            beforeEnter: (to, from, next) => {
              console.log('paramBeforeEnter')
              next()
            }
          },
          {
            path: '/paramGuardInComponent',
            name: 'paramGuardInComponent',
            component: paramGuardInComponent,
          },


        ]
      }
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
  console.log('beforeEach router', router)
  console.log('beforeEach router.afterEach', router.afterEach)
	// 显示loading过渡效果
	store.dispatch("ChangeLoading", true);
  switch (to.name) {
    case 'paramBeforeEach':
      console.log('全局前置守卫 在路由跳转完成之前执行')
      // console.log('beforeEach to', to)
      // console.log('beforeEach from', from)
      // console.log('beforeEach next', next)
      next()
      break
    default:
       break
  }
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

router.beforeResolve((to, from ,next) => {
  console.log('beforeResolve router', router)
  console.log('beforeResolve router.afterEach', router.afterEach)

  switch (to.name) {
    case 'paramBeforeResolve':
      console.log('全局解析守卫 在路由解析完成之前执行')
      break
    default:
      break
  }
  next()
})


// 路由跳转之后
router.afterEach(function (to) {
  console.log('afterEach router', router)
	// 关闭loading过渡效果
	store.dispatch("ChangeLoading", false);
});
export default router;
