<template>
  <div class="route-test1">
    <div class="route-description">
      <div class="route-description-title">router写法:</div>
      <div class="route-description-content" v-text="routeDescription"></div>
    </div>
    <div class="route-jump">
      <div class="route-jump-title">跳转方式：</div>
      <div class="route-jump-content" v-text="routeJumpDescription"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        routeDescription: '{\n' +
        '        name: \'routerTest1\',\n' +
        '        path: \'/routerTest1\',\n' +
        '        component: routerTest1,\n' +
        '        meta: { title: \'路由测试1\', requireLogin: false}\n' +
        '      }',
        routeJumpDescription: '<router-link to="/routerTest1">路由测试1</router-link>'
      }
    },
    methods: {

    },
    mounted () {
    }
  }
</script>
