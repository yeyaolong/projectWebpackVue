<!--
    后台 生命周期介绍 页面
    @author：huhl
    @createTime：2018-04-10 12:20
 -->
<template lang="html">
	<div id="life">
		<div class="">{{ message }}</div>
		<br>
		<input type="text" class="el-input__inner" placeholder="请输入手机号码" v-model="message">
	</div>
</template>

<script>
export default {
  	name: 'Life',
	data() {
          return {
			  message : "生命周期 message"
		  }
	},
	beforeCreate() {
		console.group('beforeCreate 创建前状态===============》');
		console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
		console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
		console.log("%c%s", "color:red","message: " + this.message)  
	},
	created() {
		console.group('created 创建完毕状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el); //undefined
		console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
		console.log("%c%s", "color:red","message: " + this.message); //已被初始化
	},
	beforeMount() {
		console.group('beforeMount 挂载前状态===============》');
		console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
		console.log(this.$el);
		console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
		console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
	},
	mounted() {
		console.group('mounted 挂载结束状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
		console.log(this.$el);    
		console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
		console.log("%c%s", "color:red","message: " + this.message); //已被初始化
		this.$nextTick(() => {
			// 有依赖dom必须存在的情况
			// code	
		})
	},
	beforeUpdate() {
		console.group('beforeUpdate 更新前状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el);
		console.log(this.$el);   
		console.log("%c%s", "color:red","data   : " + this.$data); 
		console.log("%c%s", "color:red","message: " + this.message); 
	},
	updated() {
		console.group('updated 更新完成状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el);
		console.log(this.$el); 
		console.log("%c%s", "color:red","data   : " + this.$data); 
		console.log("%c%s", "color:red","message: " + this.message); 
	},
	beforeDestroy() {
		console.group('beforeDestroy 销毁前状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el);
		console.log(this.$el);    
		console.log("%c%s", "color:red","data   : " + this.$data); 
		console.log("%c%s", "color:red","message: " + this.message); 
	},
	destroyed() {
		console.group('destroyed 销毁完成状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el);
		console.log(this.$el);  
		console.log("%c%s", "color:red","data   : " + this.$data); 
		console.log("%c%s", "color:red","message: " + this.message)
	}
}
</script>

<style lang="scss" scoped>
@import './life.scss';
</style>
