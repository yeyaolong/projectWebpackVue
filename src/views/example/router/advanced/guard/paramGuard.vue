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
    <div class="">
      <div class="title">完整的导航解析流程</div>
      <pre>
        1. 导航被触发
        2. 在失活的组件里调用离开守卫
        3. 全局调用beforeEach 守卫
        4. 在重用的组件里调用 beforeRouteUpdate 守卫（2.2+）
        5. 在路由配置里调用 beforeEnter
        6. 解析异步路由组件
        7. 在被激活的组件里调用 beforeRouteEnter
        8. 调用全局 beforeResolve守卫（2.5+）
        9. 导航被确认
        10. 调用全局的afterEach 钩子
        11. 触发DOM更新
        12. 用创建好的实例调用 beforeRouteEnter守卫中传给 next 的回调函数
      </pre>
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
