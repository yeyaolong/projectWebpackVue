<template>
  <div class="route-test">
    <div class="router-link-container">
      <div>
        路由基础1：
        <router-link to="/routerTest1">声明式导航(router-link 跳转)</router-link>/<el-button type="default" @click="routerTest1Fn">编程式导航(函数方式跳转)</el-button>
      </div>
      <div>
        路由基础2：
        <router-link to="/routerTest2/123">router-link 传参方式1 路径参数</router-link>/<el-button type="default" @click="$router.push('/routerTest2/123')">编程式导航</el-button>
      </div>
      <div>
        路由基础3：
        <router-link to="/routerTest3?id=123">router-link 传参方式2 query</router-link>/<el-button type="default" @click="$router.push('/routerTest3?id=123')">编程式导航</el-button>
      </div>
      <div>
        路由基础4：
        <router-link to="/routerTest4?message=这是信息哦">router-link 传参方式3 query会完全替换掉props中的内容</router-link>/<el-button type="default" @click="$router.push('/routerTest4?message=这是信息哦')">编程式导航</el-button>
      </div>
      <div>
        路由基础5：
        <router-link :to="{path: 'routerTest5'}">router-link to: {path: ''} path跳转</router-link>/<el-button type="default" @click="$router.push({path: 'routerTest5'})">编程式导航</el-button>
      </div>
      <div>
        路由基础6：
        <router-link :to="{name: 'routerTest6' }">router-link to: {name: ''} 命名路由name跳转</router-link>/<el-button type="default" @click="$router.push({name: 'routerTest6'})">编程式导航</el-button>
      </div>
      <div>
        路由基础7：
        <router-link :to="{name: 'routerTest7', params: {id: 123}}">router-link 传参方式4 </router-link>/<el-button type="default" @click="$router.push({name: 'routerTest7', params: {id: 123}})">编程式导航</el-button>
      </div>
      <div>
        路由基础8：
        <router-link :to="{path: '/routerTest8', params: {id: 123}}">router-link 传参方式5 使用path时，params无效</router-link>/<el-button type="default" @click="$router.push({path: '/routerTest8', params: {id: 123}})">编程式导航</el-button>
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
      routerTest1Fn () {
        // 错误写法 已经说过，$route 是 '当前路由对象' ,也即 this.$route === this.$router.currentRoute
        console.log('this.$route === this.$router.currentRoute', this.$route === this.$router.currentRoute) // true
        // this.$route.push('/routerTest1')
        // 正确写法 router 是 VueRouter的对象，不仅保存了VueRouter的方法，还保存了当前路由的信息
        this.$router.push('/routerTest1')
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  @import 'routerTest';
</style>
