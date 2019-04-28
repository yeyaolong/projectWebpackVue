<template>
  <div class="route-test2">
    <div class="route-description">
      <div class="route-description-title">router写法:</div>
      <div class="route-description-content" v-text="routeDescription"></div>
    </div>
    <div class="route-jump">
      <div class="route-jump-title">router-link跳转方式：</div>
      <div class="route-jump-content" v-text="routeJumpDescription"></div>
    </div>
    <div class="route-jump">
      <div class="route-jump-title">函数跳转方式：</div>
      <div class="route-jump-content" v-text="routeMethodJumpDescription"></div>
    </div>
    <div class="route-url">
      <div class="route-url-title">url</div>
      <div class="route-url-content" v-text="url"></div>
    </div>
    <div class="route-param">
      <div class="route-param-title">取参方式1：</div>
      <div class="route-param-content" v-text="getParam1"></div>
      <div>获取的值：{{paramsStr1}}</div>
    </div>
    <div class="route-param">
      <div class="route-param-title">取参方式2：</div>
      <div class="route-param-content" v-text="getParam2"></div>
      <div>获取的值：{{paramsStr2}}</div>
    </div>
    <div class="description">
      <div class="description-title">描述</div>
      <div>
        点击链接：
        <a href="https://blog.csdn.net/wangguoyu1996/article/details/80628135" target="_blank">router与route的区别</a>
      </div>
      <div>
        <div>router为VueRouter的实例，相当于一个全局的路由器对象。</div>
        <div>route相当于当前正在跳转的路由对象；可以从里面获取name,path,params,query等</div>
        我们将内容打印出来看一下：
        <img src="../../../assets/images/common/router&route.png" style="width: 100%;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routeDescription: '{\n' +
        '            name: \'routerTest2\',\n' +
        '            path: \'/routerTest2/:id\',\n' +
        '            component: routerTest1,\n' +
        '            meta: { title: \'路由测试2\', requireLogin: false}\n' +
        '          }',
        routeJumpDescription: '<router-link to="/routerTest1/123">路由测试2：router-link 传参方式</router-link>',
        routeMethodJumpDescription: '<el-button type="default" @click="$router.push(\'/routerTest2/123\')">函数方式跳转</el-button>',
        getParam1: 'this.$router.currentRoute.params',
        paramsStr1: '',
        getParam2: 'this.$route.params',
        paramsStr2: '',
        url: ''
      }
    },
    methods: {

    },
    mounted () {
      console.log('this.$router', this.$router)
      console.log('this.$route', this.$route)
      this.paramsStr1 = JSON.stringify(this.$router.currentRoute.params)
      this.paramsStr2 = JSON.stringify(this.$route.params)
      this.url = window.location.href
    }
  }
</script>
