<template>
  <div class="before-each">
    <div class="description">
      全局前置守卫
      <div class="example">
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
