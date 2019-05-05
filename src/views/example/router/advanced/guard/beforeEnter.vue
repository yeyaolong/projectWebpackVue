<template>
  <div class="before-each">
    <div class="description">
      路由独享守卫
      <div class="example">
        你可以在路由配置上直接定义beforeEnter守卫：
        <div style="color: #f00;font-weigth: 600;">beforeEnter 会在 beforeEach后，在beforeResolve之前执行</div>
        <div class="code">
          <pre>
            const router = new VueRouter({
              routes: [
                {
                  path: '/beforeEnter',
                  component: beforeEnter,
                  beforeEnter: (to, from, next) => {
                    // ...
                  }
                }
              ]
            })
          </pre>
        </div>
        <div>
          这些守卫和全局前置守卫的方法参数是一样的。
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
