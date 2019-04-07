<template>
	<div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<app-loading></app-loading>
	</div>
</template>

<script>
import AppLoading from '@/views/components/loading'
export default {
  	name: 'app',
	data() {
          return {
			 
		  }
	},
	components: {
		AppLoading
	}
}
</script>

<style scoped>
@import './assets/css/base.scss';
#app {
  	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
