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
    <div class="route-param">
      <div class="route-param-title">取参方式3：</div>
      <div class="route-param-content" v-text="getParam3"></div>
      <div>获取的值：{{paramsStr3}}</div>
    </div>
    <div class="route-param">
      <div class="route-param-title">取参方式4：</div>
      <div class="route-param-content" v-text="getParam4"></div>
      <div>获取的值：{{paramsStr4}}</div>
    </div>
    <div class="description">
      <div class="description-title">描述</div>
      <div class="">
        <p>可以发现，使用?id=xxx的这种query传参的方式，</p>
        <p>只能从query中获取数据query: {id: xxx}，</p>
        <p>不能从params中获取数据，params: {}</p>
      </div>
      <div>
        我们将内容打印出来看一下：
        <img src="../../../../assets/images/common/routerQuery1.png" style="width: 100%;">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routeDescription: '          {\n' +
        '            name: \'routerTest3\',\n' +
        '            path: \'/routerTest3\',\n' +
        '            component: routerTest3,\n' +
        '            meta: { title: \'路由测试3\', requireLogin: false}\n' +
        '          }',
        routeJumpDescription: '<router-link to="/routerTest3?id=123">路由测试3：router-link 传参方式2</router-link>',
        routeMethodJumpDescription: '<el-button type="default" @click="$router.push(\'/routerTest3?id=123\')">函数方式跳转</el-button>',
        getParam1 : 'this.$router.currentRoute.query.id',
        paramsStr1: '',
        getParam2 : 'this.$route.query.id',
        paramsStr2: '',
        getParam3 : 'this.$router.currentRoute.params.id',
        paramsStr3: '',
        getParam4 : 'this.$route.params.id',
        paramsStr4: '',
        url: ''
      }
    },
    methods: {

    },
    mounted () {
      console.log('this.$router', this.$router)
      console.log('this.$route', this.$route)
      this.paramsStr1 = this.$router.currentRoute.query.id
      this.paramsStr2 = this.$route.query.id
      this.paramsStr3 = this.$router.currentRoute.params.id
      this.paramsStr4 = this.$route.params.id
      this.url = window.location.href
    }
  }
</script>

<style scoped>
  @import 'routerTest.scss';
</style>
