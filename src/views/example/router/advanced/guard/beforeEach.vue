<template>
  <div class="before-each">
    <div class="description">
      全局前置守卫
      <div class="example">
        举例：
        <div class="code" >
          <!--<div class="router-code">-->
            <!--<p class="router-code-title">路由代码：</p>-->
            <!--<div>-->
              <!--{ path: '/paramBoolean/:id', name: 'paramBoolean', component: paramBoolean, <span style="color: red; font-size: 24px;">props: true</span>, meta: { title: '路由参数 布尔模式', requireLogin: false}},-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="push-code">-->
            <!--<p class="router-code-title">跳转代码</p>-->
            <!--<div v-text="pushCode1"></div>-->
          <!--</div>-->
          <!--<div class="router-param">-->
            <!--<p class="router-param-title">获取的参数</p>-->
            <!--<p class="router-param-code">props['id']</p>-->
            <!--<p class="router-param-code" v-text="routerParamCode"></p>-->
            <!--<div>{{ id }}</div>-->
          <!--</div>-->
          <!--<div class="description">-->
            <!--<div class="description-title">描述</div>-->
          <!--</div>-->
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
