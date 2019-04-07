<!--
    后台header 组件
    @author：huhl
    @createTime：2018-04-10 12:20
 -->
<template lang="html">
	<div class="header">
		<div class="logo"><img src="@/assets/images/common/logo.png" alt=""></div>
		<div class="headerNav">
			<a href="#" @click.stop.prevent="handleSwitchScreen">
				<i class="fa" :class="isFullScreen ? 'fa-compress' : 'fa-expand'"></i>最大化
			</a> &nbsp;&nbsp;
			<el-dropdown>
				<span class="el-dropdown-link" style="color:#fff; font-size:16px;">
					{{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>用户信息</el-dropdown-item>
					<el-dropdown-item>修改密码</el-dropdown-item>
					<el-dropdown-item>注销</el-dropdown-item>
					<el-dropdown-item>退出账号</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>&nbsp;&nbsp;
			<span class="mr20"><a href="#"><i class=" mr3"></i>注销</a></span>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapActions, mapState} from 'vuex'
import {
  requestFullScreen,
  exitFullscreen
} from '@/utils/screen'


export default {
	name:"Header",  
	props: {
		user: {}
	},
	data () {
		return {
      		isFullScreen: false
	  	}
	},
	computed:{
		userName(){
			let userName = JSON.parse(window.sessionStorage.getItem("loginUserBaseInfo")).name;
			return userName;
		}
	},
	methods:{
		handleSwitchScreen () {
			if (this.isFullScreen) {
				exitFullscreen()
				this.isFullScreen = false
			} else {
				requestFullScreen()
				this.isFullScreen = true
			}
		},
	}
};
</script>


<style lang="scss" scoped>
@import './header.scss';
</style>