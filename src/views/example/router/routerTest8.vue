<template>
  <div class="route-test1">
    <div class="route-description">
      <div class="route-description-title">router写法:</div>
      <div class="route-description-content" v-text="routeDescription"></div>
    </div>
    <div class="route-jump">
      <div class="route-jump-title">router-link 跳转方式：</div>
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
      <div class="red-font">
        <p>注意：如果提供了 path，params 会被忽略</p>
        <p>可以发现，使用:to={path: '/routerTest9', params: {id: 123}}的这种params传参的方式，</p>
        <p>既不能从query中获取数据query: {}，</p>
        <p>也不能从params中获取数据，params: {}</p>
      </div>
      <div>
        我们将内容打印出来看一下：
        <img src="../../../assets/images/common/paramsInvalid.png" style="width: 100%;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routeDescription: '{\n' +
        '            name: \'routerTest8\',\n' +
        '            path: \'/routerTest8\',\n' +
        '            component: routerTest8,\n' +
        '            meta: { title: \'路由测试8\', requireLogin: false}\n' +
        '          }',
        routeJumpDescription: '<router-link :to="{path: \'/routerTest8\', params: {id: 123} }">路由测试8：router-link 传参方式5 query</router-link>',
        routeMethodJumpDescription: '<el-button type="default" @click="$router.push({path: \'/routerTest8\', params: {id: 123}})">函数方式跳转</el-button>',
        getParam1 : 'this.$router.currentRoute.query',
        paramsStr1: '',
        getParam2 : 'this.$route.query',
        paramsStr2: '',
        url: ''
      }
    },
    methods: {

    },
    mounted () {
      console.log('this.$router', this.$router)
      console.log('this.$route', this.$route)
      this.paramsStr1 = this.$router.currentRoute.query
      this.paramsStr2 = this.$route.query
      this.url = window.location.href
    }
  }
</script>

<style scoped>
  @import './routerTest.scss';
</style>
