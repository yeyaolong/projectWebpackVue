<template>
  <div class="param-object">
    <div class="description">
      如果props 是一个对象，它会被按原样设置为组件属性。当props 是静态的时候有用。
      <span style="color: red; font-size: 24px;">也即，只能获取静态的数据</span>
      <div class="example">
        举例：
        <div class="code" >
          <div class="router-code">
            <p class="router-code-title">路由代码：</p>
            <div>
              { path: '/paramObject', name: 'paramObject', component: paramObject, <span style="color: red; font-size: 24px;">props: {id: 123, article: 'hello world'}</span>, meta: { title: '路由参数 对象模式', requireLogin: false}}
            </div>
          </div>
          <div class="push-code">
            <p class="router-code-title">跳转代码</p>
            <div v-text="pushCode1"></div>
          </div>
          <div class="router-param">
            <p class="router-param-title">获取的参数：</p>
            <p class="router-param-code">props['id']</p>
            <div v-if="id && (id + '').length > 0">id: {{ id }}</div>
            <div v-else>并没有获取到数据</div>
            <p class="router-param-code">props['article']</p>
            <div v-if="article && article.length > 0">article {{ article }}</div>
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
      pushCode1: 'this.$router.push(\'/paramObject\')'
    }
  },
  props: ['id', 'article'],
  methods: {

  },
  mounted () {
    console.log('id', this.id)
    console.log('article', this.article)
  }
}
</script>

<style lang="scss" scoped>
  @import '../../base/routerTest';
</style>
