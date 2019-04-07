<!--
    页面loading组件
    @author：huhl
    @createTime：2018-04-10 12:20
 -->
<template lang="html">
	<div class="el-loading-mask is-fullscreen" v-if="isLoading">
		<div class="el-loading-spinner">
			<svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg><!---->
		</div>
	</div>
</template>

<script>
import {mapState} from "vuex";
export default {
	name:"Loading",
  	data () {
		return {
		
		}
	},
	computed:{
		...mapState({
			isLoading:state=>state.example.isLoading
		})
	},
}
</script>

<style lang="scss" scoped>
@import './loading.scss';
</style>