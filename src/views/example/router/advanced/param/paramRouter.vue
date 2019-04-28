<template>
  <div class="param-router">
    <div class="description">

    </div>
    <div class="router-link-container">
      <el-button type="primary" @click="routerDecouplingFn(false, 1)">未解耦1 恰好传一个参数</el-button>
      <el-button type="primary" @click="routerDecouplingFn(false, 2)">未解耦2 多传一个参数</el-button>
      <el-button type="primary" @click="routerDecouplingFn(false, 3)">未解耦3 不传参数</el-button>
      <el-button type="primary" @click="routerDecouplingFn(true, 1)">解耦1 恰好传一个参数</el-button>
      <el-button type="primary" @click="routerDecouplingFn(true, 2)">解耦2 多传一个参数</el-button>
      <el-button type="primary" @click="routerDecouplingFn(true, 3)">解耦3 不传参数</el-button>
      <el-button type="primary" @click="routerBooleanFn">布尔模式</el-button>
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
          if (type === 1) {
            this.$router.push('/paramDecoupling/123')
          } else if (type === 2) {
            this.$router.push('/paramDecoupling/123/456')
          } else {
            this.$router.push('/paramDecoupling')
          }
        } else {
          console.log('未解耦')
          if (type === 1) {
            this.$router.push('/paramNotDecoupling/123')
          } else if (type === 2) {
            this.$router.push('/paramNotDecoupling/123/456')
          } else {
            this.$router.push('/paramNotDecoupling')
          }

        }
      },
      routerBooleanFn () {
        console.log('布尔模式')
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
