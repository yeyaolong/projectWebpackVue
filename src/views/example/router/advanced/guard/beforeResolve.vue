<template>
  <div class="before-each">
    <div class="description">
      全局解析守卫：
      <div>
        <div class="shadow"></div>
        2.5.0 新增
      </div>
      <div>
        在2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach类似，区别是在导航被确认之前，<span style="color: #000; font-weight: 600;">同时在所有组件内守卫和异步路由组件被解析之后</span>，解析守卫就被调用。
      </div>
      <div class="example">
        然而，实际上我并没有很好的把它和beforeEach区分开来，从控制台的打印情况来看，我只能知道，beforeResolve 在 beforeEach之后执行了。但我并不能清楚,vue-roter 在这两个钩子之间执行了什么.
        <div style="color:#f00;">这一点，我们需要阅读vue-router的源码才能完成（未进行的）</div>
        <div class="code" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {

    },
    beforeCreate () {
      // alert('beforeCreate')
    },
    created () {
      // alert('Created')
    },
    beforeMount () {
      // alert('beforeMount')
    },
    mounted () {
      // alert('mounted')
    },
    beforeDestroy () {
      // console.log('beforeDestroy')
    },
    destroyed () {
      // console.log('destroy')
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../base/routerTest';
</style>
