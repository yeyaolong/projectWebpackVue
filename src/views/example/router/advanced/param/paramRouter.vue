<template>
  <div class="param-router">
    <div class="description">

    </div>
    <div class="router-link-container">
      <el-button type="primary" @click="routerDecouplingFn(false, 1)">未解耦</el-button>
      <el-button type="primary" @click="routerDecouplingFn(true, 1)">解耦</el-button>
      <el-button type="primary" @click="routerBooleanFn(true)">布尔模式 true</el-button>
      <el-button type="primary" @click="routerBooleanFn(false)">布尔模式 false</el-button>
      <el-button type="primary" @click="routerObjectFn">对象模式</el-button>
      <el-button type="primary" @click="routerMethodFn">函数模式</el-button>
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
    props: {},
    methods: {
      routerDecouplingFn (decoupling, type) {
        if (decoupling) {
          console.log('解耦')
          this.$router.push('/paramDecoupling/123')
        } else {
          console.log('未解耦')
          this.$router.push('/paramNotDecoupling/123')
        }
      },
      routerBooleanFn (type) {
        console.log('布尔模式')
        if (type) {
          this.$router.push('/paramBoolean/123')
        } else {
          this.$router.push('/paramBooleanFalse/123')
        }

      },
      routerObjectFn () {
        console.log('对象模式')
      },
      routerMethodFn () {
        console.log('函数模式')
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../base/routerTest';
</style>
