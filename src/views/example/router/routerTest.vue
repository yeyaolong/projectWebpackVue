<template>
  <div class="route-test">
    <div class="router-link-container">
      <div>
        <router-link to="/routerTest1">路由测试1： router-link 跳转</router-link>
      </div>
      <div>
        <router-link to="/routerTest2/123">路由测试2：router-link 传参方式1</router-link>
      </div>
      <div>
        <router-link to="/routerTest3?id=123">路由测试3：router-link 传参方式2 query</router-link>
      </div>
      <div>
        <router-link to="/routerTest4?message=这是信息哦">路由测试4：router-link 传参方式3 query会完全替换掉props中的内容</router-link>
      </div>
    </div>
    <div class="router-view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: ''
      }
    },
    methods: {

    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import './routerTest.scss';
</style>
