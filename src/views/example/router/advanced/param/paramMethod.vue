<template>
  <div class="param-method">
    <div class="description">
      你可以创建一个函数返回props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。
      <div class="example">
        举例：
        <div class="code" >
          <div class="router-code">
            <p class="router-code-title">路由代码：</p>
            <div>
              { path: '/paramMethod', name: 'paramMethod', component: paramMethod, props: (route) => ({ query: route.query }), meta: { title: '路由参数 函数模式', requireLogin: false}}
            </div>
          </div>
          <div class="push-code">
            <p class="router-code-title">跳转代码</p>
            <div v-text="pushCode1"></div>
          </div>
          <div class="router-param">
            <p class="router-param-title">用query的传参，不能用Vue props 接收数据：</p>
            <p class="router-param-code">props['id']</p>
            <div v-if="id && (id + '').length > 0">id: {{ id }}</div>
            <div v-else>并没有获取到数据</div>
            <p class="router-param-code">props['article']</p>
            <div v-if="article && article.length > 0">article {{ article }}</div>
            <div v-else>并没有获取到数据</div>
          </div>
          <div class="router-param">
            <p class="router-param-title">用query的传参，可以在Vue实例中，使用this.$route.query获取：</p>
            <p class="router-param-code">this.$route.query.id</p>
            <div v-if="queryId && (queryId + '').length > 0">id: {{ queryId }}</div>
            <div v-else>并没有获取到数据</div>
            <p class="router-param-code">this.$route.query.article</p>
            <div v-if="queryArticle && queryArticle.length > 0">article {{ queryArticle }}</div>
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
        pushCode1: 'this.$router.push(\'/paramMethod\')',
        queryId: '',
        queryArticle: ''
      }
    },
    props: ['id', 'article'],
    methods: {

    },
    mounted () {
      console.log('this.$route.query', this.$route.query)
      this.queryArticle = this.$route.query.article
      this.queryId = this.$route.query.id
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../base/routerTest';
</style>
