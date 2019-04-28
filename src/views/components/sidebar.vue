<!--
    后台左侧菜单 组件
    @author：huhl
    @createTime：2018-04-10 12:20
 -->
<template lang="html">

	<div class="side-menu" :collapse="isCollapse">
		<el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
		background-color="#fff">
			<el-menu-item index="0" @click="$router.push('/')">
				<i class="el-icon-document"></i>
				<span slot="title">控制台</span>
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">导航一</span>
				</template>
				<el-menu-item-group>
					<span slot="title">分组一</span>
					<el-menu-item index="1-1" @click="$router.push('/life')">生命周期展示</el-menu-item>
					<el-menu-item index="1-2" @click="$router.push('/syntax')">基本语法</el-menu-item>
					<el-menu-item index="1-3" @click="$router.push('/article/298832871092')">动态路由</el-menu-item>
					<el-menu-item index="1-4" @click="$router.push('/form')">表单类展示</el-menu-item>
					<el-menu-item index="1-5" @click="$router.push('/table')">列表页面展示</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-7">
					<span slot="title">子菜单展示</span>
					<el-menu-item index="1-7-1">子菜单1</el-menu-item>
					<el-menu-item index="1-7-2">子菜单2</el-menu-item>
					<el-menu-item index="1-7-3">子菜单3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-document"></i>
					<span slot="title">导航二</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="2-1">选项1</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">指令</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(item, index) in directiveMenu" :key="index" :index="'3-'+index" @click="showDirectiveContent(item)">{{item}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">路由</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            <router-link to="/routerTest">路由基础 跳转、传参、取参</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/paramRouter">路由进阶 路由组件传参</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
		</el-menu>
	</div>


</template>
<script type="text/javascript">
import { $ajaxExample } from '@/api'

export default {
	name:"Sidebar",
    data() {
      return {
        isCollapse: false,
        directiveMenu: []
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      getDirectiveMenu () {
        // 获取 "指令" 菜单
        let params = {}
        let _this = this
        $ajaxExample.getDirectiveMenu(params, (res) => {
          _this.directiveMenu = res.data.directiveList
        }, undefined)
      },
      showDirectiveContent (type) {
        this.$router.push({path: `/directive/${type}`})
      }
    },
    mounted () {
	    this.getDirectiveMenu()
    }
  }
</script>
<style lang="scss" scoped>
@import './sidebar.scss';
</style>
