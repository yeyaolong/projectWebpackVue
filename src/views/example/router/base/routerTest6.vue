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
        '            name: \'routerTest6\',\n' +
        '            path: \'/routerTest6\',\n' +
        '            component: routerTest6,\n' +
        '            meta: { title: \'路由测试6\', requireLogin: false}\n' +
        '          }',
        routeJumpDescription: '<router-link :to="{name: \'routerTest6\' }">路由测试6：router-link to: {name: \'\'} 命名路由跳转</router-link>',
        routeMethodJumpDescription: '<el-button type="default" @click="$router.push({name: \'routerTest6\'})">函数方式跳转</el-button>',
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

<style scoped>
  @import 'routerTest.scss';
</style>

