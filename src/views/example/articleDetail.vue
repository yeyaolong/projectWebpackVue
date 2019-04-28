<!--
    后台 详细页 页面
    @author：huhl
    @createTime：2018-04-10 12:20
 -->
<template lang="html">
	<div id="life">
		<div class="">{{ article_id }}</div>
		<el-card class="box-card" v-loading="articleLoading" >
			<div class="title">{{ title }}</div>
			<div class="time">{{ date }}</div>
			<div class="detail">{{ detail }}</div>
		</el-card>
	</div>
</template>

<script>
import { $ajaxExample } from '@/api';
export default {
  	name: 'Life',
	data() {
      return {
			  article_id : "",
			  title:"",
				detail:"",
				date:"",
				articleLoading:""
		  }
    },
    watch:{
      '$route' (to, from) {
	      let id = this.$route.params.article_id;
	      if (this.article_id != id) {
					this.article_id = id;
				}
	    },
			article_id(newVal,oldVal){
				this.ajaxLoad();
			}
    },
    created(){
      this.article_id = this.$route.params.article_id;
      console.log('articleDetail this.$route', this.$route)
      console.log('articleDetail this.$route.query', this.$route.query)
      console.log('articleDetail this.$route.params', this.$route.params)
      console.log('articleDetail this.$route.currentRoute', this.$route.currentRoute)
    },
    methods:{
			// 读取数据
			ajaxLoad(){
				var self = this;
				self.articleLoading = true;
				$ajaxExample.getArticleDetail({
					"acticle_id":self.article_id,
				},function(response){
					self.articleLoading = false;
					let data = response.data.entity;
					self.title = data.title;
					self.date = data.time;
					self.detail = data.detail;
				});
			}
    }
}
</script>

<style lang="scss" scoped>
@import './articleDetail.scss';
</style>
