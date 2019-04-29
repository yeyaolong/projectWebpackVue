<template>
  <div class="param-decoupling">
    <div class="description">
      在组件中使用$router会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的URL上面使用，限制了其灵活性。
      <div class="example">
        举例：
        <div class="code" >
          <div class="router-code">
            <p class="router-code-title">路由代码：</p>
            <div v-text="codeText"></div>
          </div>
          <div class="push-code">
            <p class="router-code-title">跳转代码</p>
            <div v-text="pushCode1"></div>
          </div>
          <div class="router-param">
            <p class="router-param-title">获取的参数  未解耦：</p>
            <p class="router-param-code" v-text="routerParamCode"></p>
            <div>{{$route.params.id}}</div>
          </div>
          <div class="description">
            <div class="description-title">描述</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      codeText: '{ path: \'/paramNotDecoupling/:id\', name: \'paramNotDecoupling\', component: paramNotDecoupling, meta: { title: \'路由参数未解耦\', requireLogin: false}},',
      pushCode1: 'this.$router.push(\'/paramNotDecoupling/123\')',
      routerParamCode: '{{$route.params.id}}'
    }
  },
  methods: {

  },
  mounted () {
    console.log(this.$route)

  }
}
</script>

<style lang="scss" scoped>
  @import '../../base/routerTest';
</style>

