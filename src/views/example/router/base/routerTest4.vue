<template>
  <div class="route-test1">
    <div class="route-description">
      <div class="route-description-title">router写法:</div>
      <div class="route-description-content" v-text="routeDescription"></div>
    </div>
    <div class="route-jump">
      <div class="route-jump-title">router-link 跳转方式：</div>
      <div class="route-jump-content" v-text="routeJumpDescription"></div>
    </div>
    <div class="route-jump">
      <div class="route-jump-title">函数跳转方式：</div>
      <div class="route-jump-content" v-text="routeMethodJumpDescription"></div>
    </div>
    <div class="route-url">
      <div class="route-url-title">url</div>
      <div class="route-url-content" v-text="url"></div>
    </div>
    <div class="route-param">
      <div class="route-param-title">取参方式1：</div>
      <div class="route-param-content" v-text="getParam1"></div>
      <div>获取的值：{{paramsStr1}}</div>
    </div>
    <div class="route-param">
      <div class="route-param-title">取参方式2：</div>
      <div class="route-param-content" v-text="getParam2"></div>
      <div>获取的值：{{paramsStr2}}</div>
    </div>
    <div class="description">
      <div class="red-font">
        <p>可以发现，使用?message=xxx的这种query传参的方式，</p>
        <p>"跳转方式"会将原来的"router写法"所写的所有query的内容覆盖掉。</p>
        <p>我们在"跳转方式"中写了 message=xxx</p>
        <p>而在"router写法"中写的是props:{id: 123}</p>
        <p>"router写法"中的所有内容都被覆盖掉了</p>
      </div>
      <div>
        我们将内容打印出来看一下：
        <img src="../../../../assets/images/common/routeQuery.png" style="width: 100%;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routeDescription: '{\n' +
        '            name: \'routerTest4\',\n' +
        '            path: \'/routerTest4\',\n' +
        '            component: routerTest4,\n' +
        '            meta: { title: \'路由测试4\', requireLogin: false},\n' +
        '            props: {id: \'123\'}\n' +
        '          }',
        routeJumpDescription: '<router-link to="/routerTest4?message=这是信息哦">路由测试4：router-link 传参方式3</router-link>',
        routeMethodJumpDescription: '<el-button type="default" @click="$router.push(\'/routerTest4?message=这是信息哦\')">函数方式跳转</el-button>',
        getParam1: 'this.$router.currentRoute.query',
        paramsStr1: '',
        getParam2: 'this.$route.query',
        paramsStr2: '',
        url: ''
      }
    },
    methods: {

    },
    mounted () {
      console.log('this.$router', this.$router)
      console.log('this.$route', this.$route)
      this.paramsStr1 = JSON.stringify(this.$router.currentRoute.query)
      this.paramsStr2 = JSON.stringify(this.$route.query)
      this.url = window.location.href
    }
  }
</script>


<style scoped>
  @import 'routerTest.scss';
</style>
