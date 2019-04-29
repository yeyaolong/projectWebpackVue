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
        路由基础2.1 错误的写法 路径参数，不论多一个还是少一个参数，都无法做正确的路由跳转。必须与路径参数数量一模一样
        <div>
          <router-link to="/routerTest2/123/456">router-link 传参方式1 路径参数</router-link>/<el-button type="default" @click="$router.push('/routerTest2/123/456')">编程式导航</el-button>
        </div>
      </div>
      <div>
        路由基础2.2 错误的写法 路径参数 /routerTest2//这种写法看似传了一个值为undefined的参数过来，实际山还是无法做正确的路由跳转的
        <div>
          <router-link to="/routerTest2//">router-link 传参方式1 路径参数</router-link>/<el-button type="default" @click="$router.push('/routerTest2//')">编程式导航</el-button>
        </div>
      </div>
      <div>
        路由基础2.3 错误的写法 路径参数 /routerTest2/#这种写法看似传了一个值为#的参数过来，实际上还是无法做正确的路由跳转的
        <div>
          <router-link to="/routerTest2/#">router-link 传参方式1 路径参数</router-link>/<el-button type="default" @click="$router.push('/routerTest2/#')">编程式导航</el-button>
        </div>
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
