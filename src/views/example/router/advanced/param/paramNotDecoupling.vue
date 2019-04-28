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
            <p class="router-code-title">跳转代码 未解耦1：</p>
            <div v-text="pushCode1"></div>
          </div>
          <div class="push-code">
            <p class="router-code-title">跳转代码 未解耦2：</p>
            <div v-text="pushCode2"></div>
          </div>
          <div class="push-code">
            <p class="router-code-title">跳转代码 未解耦3：</p>
            <div v-text="pushCode3"></div>
          </div>
          <div class="description">
            <div class="description-title">描述</div>
            <p>未解耦1的跳转代码是可行的，因为它跳转的url与 路由代码的相同。</p>
            <p>但是</p>
            <p>未解耦2的跳转代码会被导航到404页面，因为它跳转的页面比路由代码给出的url的参数不同（多了一个参数），无法被路由识别</p>
            <p>也即，未解耦前，这个paramNotDecoupling组件，只能在 <span style="color: red;">/paramDecoupling/123</span>这种只有一个参数的情况下被识别到</p>
            <p>不论多传还是少传一个参数都是跳转到404</p>
            <p>所以，这种写法不利于这个组件的重用</p>
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
      pushCode2: 'this.$router.push(\'/paramNotDecoupling/123/456\')',
      pushCode3: '<el-button type="primary" @click="routerDecouplingFn(false, 3)">未解耦3 不传参数</el-button>'

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

