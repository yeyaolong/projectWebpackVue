<template>
  <div class="before-each">
    <div class="description">
      组件内的守卫

      <span style="color:#f00;">获取的id: {{id}}</span>
      <div class="example">
        最后，你可以在路由组件内直接定义以下路由导航守卫：
        <div class="code" >
          <pre>
            export default {
              data () {
              },
              /* 路由守卫 */
              beforeRouteEnter (to, from , next) {
                console.warn('beforeRouteEnter 进入路由时调用')
                next()
              },
              beforeRouteUpdate (to, from, next) {
                <div style="color:#f00;fotn-weight: 600;">// 奇怪的是，this.$router.query.id 改变总是慢一拍，原因我没有找到</div>
                console.warn(this.$route.query.id)
                if (this.$route.query.id) {
                  this.id = this.$route.query.id
                } else {
                  this.id = '没有获取到id参数'
                }
                console.warn('beforeRouteUpdate 更新路由时调用')
                next()
              },
              beforeRouteLeave (to, from, next) {
                console.warn('beforeRouteLeave 离开路由时调用')
                next()
              }
            }
          </pre>
          <div class="description">
            这里需要注意几点内容：
            <div>
              <div style="font-size: 26px;">1. 与 vue 的生命周期比较：</div>
              <div>
                <div style="color:#f00;font-weight: 600;">进入页面时：</div>
                <div>路由 beforeRouteEnter ===>   Vue beforCreated ===> Vue created ===> Vue beforeMount ===> Vue mounted</div>
              </div>

              <div>
                <div style="color:#f00;font-weight: 600;">路由内容更新</div>
                <div>由于组件并没有重新加载，所以只执行</div>
                <div> 路由 beforeRouteUpdate</div>
              </div>
              <div>
                <div style="color:#f00;font-weight: 600;">离开页面时：</div>
                <div>路由 beforeRouteLeave ===>   Vue beforDestroy ===> Vue destoryed</div>
              </div>
            </div>
            <div style="font-size: 26px;">2. this相关</div>
            <div>
              从第一点，我们知道，由于路由 beforeRouteEnter 在 Vue生命周期开始之前（beforeCreate）就执行了，所以，
              <div style="color:#f00;font-weight: 600;">在路由 beforeRouteEnter 中不能使用'this'</div>
              在路由 beforeRouteUpdate 和 路由 beforeRouteLeave 中可以使用this
            </div>
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
        id: '没有获取到id参数'
      }
    },
    methods: {

    },
    beforeCreate () {
      console.warn('beforeCreate')
    },
    created () {
      console.warn('Created')
    },
    beforeMount () {
      console.warn('beforeMount')
    },
    mounted () {
      if (this.$route.query.id) {
        this.id = this.$route.query.id
      } else {
        this.id = '没有获取到id参数'
      }
      console.warn('mounted')
    },
    beforeDestroy () {
      console.warn('beforeDestroy')
    },
    destroyed () {
      console.warn('destroyed')
    },
    /* 路由守卫 */
    beforeRouteEnter (to, from , next) {
      console.warn('beforeRouteEnter 进入路由时调用')
      next()
    },
    beforeRouteUpdate (to, from, next) {
      console.warn(this.$route.query.id)
      if (this.$route.query.id) {
        this.id = this.$route.query.id
      } else {
        this.id = '没有获取到id参数'
      }
      console.warn('beforeRouteUpdate 更新路由时调用')
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.warn('beforeRouteLeave 离开路由时调用')
      next()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../base/routerTest';
</style>
