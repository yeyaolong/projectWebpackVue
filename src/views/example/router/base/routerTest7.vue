<template>
  <div class="route-test2">
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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routeDescription: '{\n' +
        '            name: \'routerTest7\',\n' +
        '            path: \'/routerTest7\',\n' +
        '            component: routerTest7,\n' +
        '            meta: { title: \'路由测试7\', requireLogin: false}\n' +
        '          }',
        routeJumpDescription: '<router-link :to="{name: \'routerTest7\', params: {id: 123} }">路由测试7：router-link 传参方式4 </router-link>',
        routeMethodJumpDescription: '<el-button type="default" @click="$router.push({name: \'routerTest7\', params: {id: 123}})">函数方式跳转</el-button>',
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

<style scoped>
  @import 'routerTest.scss';
</style>
