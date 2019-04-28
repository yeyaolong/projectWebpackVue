<template>
  <div class="route-test1">
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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routeDescription: '{\n' +
        '        name: \'routerTest1\',\n' +
        '        path: \'/routerTest1\',\n' +
        '        component: routerTest1,\n' +
        '        meta: { title: \'路由测试1\', requireLogin: false}\n' +
        '      }',
        routeJumpDescription: '<router-link to="/routerTest1">路由测试1</router-link>',
        routeMethodJumpDescription: '<el-button type="default" @click="routerTest1Fn">函数方式跳转</el-button>',
        url: ''
      }
    },
    methods: {

    },
    mounted () {
      this.url = window.location.href
    }
  }
</script>

<style>
  @import 'routerTest.scss';
</style>
