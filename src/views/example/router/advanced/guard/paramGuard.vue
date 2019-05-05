<template>
  <div class="param-guard">
    <div class="description">

    </div>
    <div class="router-link-container">
      <el-button type="primary" @click="routerBeforeEachFn">全局前置守卫</el-button>
      <el-button type="primary" @click="routerBeforeResolveFn">全局解析守卫</el-button>
      <el-button type="primary" @click="routerAfterEachFn">全局后置钩子</el-button>
      <el-button type="primary" @click="routerBeforeEnterFn">路由独享守卫</el-button>
      <el-button type="primary" @click="routerComponentInnerFn(1)">组件内的守卫1</el-button>
      <el-button type="primary" @click="routerComponentInnerFn(2)">组件内的守卫2 更新</el-button>
    </div>
    <div class="router-view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      routerBeforeEachFn () {
        this.$router.push({name: 'paramBeforeEach'})
      },
      routerBeforeResolveFn () {
        this.$router.push({name: 'paramBeforeResolve'})
      },
      routerAfterEachFn () {
        this.$router.push({name: 'paramAfterEach'})
      },
      routerBeforeEnterFn () {
        this.$router.push({name: 'paramBeforeEnter'})
      },
      routerComponentInnerFn (id) {
        this.$router.push({name: 'paramGuardInComponent', query: {id: id}})

      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../base/routerTest';
</style>
