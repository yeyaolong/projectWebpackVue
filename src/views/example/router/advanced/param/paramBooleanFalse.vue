<template>
  <div class="param-boolean">
    <div class="description">
      在组件中使用$router会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的URL上面使用，限制了其灵活性。
      <div class="example">
        举例：
        <div class="code" >
          <div class="router-code">
            <p class="router-code-title">路由代码：</p>
            <div>
              { path: '/paramBoolean/:id', name: 'paramBoolean', component: paramBoolean, <span style="color: red; font-size: 24px;">props: false</span>, meta: { title: '路由参数 布尔模式', requireLogin: false}},
            </div>
            直接不写props也就是默认为props: false
            <div>
              { path: '/paramBoolean/:id', name: 'paramBoolean', component: paramBoolean, <s style="color: red; font-size: 24px;">props: false</s>, meta: { title: '路由参数 布尔模式', requireLogin: false}},
            </div>
          </div>
          <div class="push-code">
            <p class="router-code-title">跳转代码</p>
            <div v-text="pushCode1"></div>
          </div>
          <div class="router-param">
            <p class="router-param-title">获取的参数：</p>
            <p class="router-param-code">props['id']</p>
            <p class="router-param-code" v-text="routerParamCode"></p>
            <div v-if="id && id.length > 0">{{ id }}</div>
            <div v-else>并没有获取到数据</div>
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
        pushCode1: 'this.$router.push(\'/paramDecoupling/123\')',
        routerParamCode: '<div>{{ id }}</div>'
      }
    },
    props: ['id'],
    methods: {

    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../base/routerTest';
</style>
