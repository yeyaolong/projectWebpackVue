<template>
  <div class="before-each">
    <div class="description">
      全局后置钩子
      <div class="example">
        你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受next函数也不会改变导航本身
        <div class="code" >
          <pre>
          router.afterEach((to, from) => { // 没有next函数
            // ...
          })
          </pre>
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
