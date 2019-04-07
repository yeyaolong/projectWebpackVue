<!--
    后台 生命周期介绍 页面
    @author：huhl
    @createTime：2018-04-10 12:20
 -->
<template lang="html">
	<div id="life">
		<div class="">字符串：{{ msg }}</div>
		<div class="">字符串反转：{{ reversedMessage }}</div>
		<div>字符串拼接：{{ msg + "--新增字符串" }}</div>
		<!-- 每个绑定都只能包含单个表达式 -->
		
        <div>姓名：{{ fullName }}</div>
		<br><br>

		<!-- html 赋值 -->
		<div>{{ rawHtml }}</div>
		<div v-html="rawHtml"></div>

        <div class="">{{ thisTime | dateFrm}}</div>
        <br><br>
		
		<div>
			<form @submit.prevent="onSubmit">
				<label for="">手机号码：</label>
				<input type="text" class="el-input__inner" placeholder="请输入手机号码" v-model="testInput">
			</form>
		</div>
		<br><br>
		<div>
			<p>
				<router-link :to="{ name: 'articleDetail', params: { article_id: 123 }}">跳转</router-link>
			</p>
<!--
<img v-bind:src="imageSrc">
<img :src="imageSrc">

内联字符串拼接
<img :src="'/path/to/images/' + fileName">

class 绑定
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

style 绑定
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

绑定一个有属性的对象
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

通过 prop 修饰符绑定 DOM 属性
<div v-bind:text-content.prop="text"></div>

prop 绑定。“prop”必须在 my-component 中声明
<my-component :prop="someThing"></my-component>

 通过 $props 将父组件的 props 一起传给子组件
<child-component v-bind="$props"></child-component>

XLink
<svg><a :xlink:special="foo"></a></svg>

自定义属性
<div :data-id="testInput"></div>
-->

			
			<br><br>
			<p>
				<button class="el-button el-button--primary" v-on:click="doSomething">点击事件</button>
			</p>
<!--
内联语句
<button v-on:click="doThat('hello', $event)"></button>
<button @click="doThat('hello', $event)">按钮 点击事件缩写</button>

缩写
<button @click="doThis"></button>

停止冒泡
<button @click.stop="doThis"></button>

阻止默认行为
<button @click.prevent="doThis"></button>

阻止默认行为，没有表达式
<form @submit.prevent></form>

 串联修饰符
<button @click.stop.prevent="doThis"></button>

键修饰符，键别名
<input @keyup.enter="onEnter">

键修饰符，键代码
<input @keyup.13="onEnter">

点击回调只会触发一次
<button v-on:click.once="doThis"></button>

对象语法 (2.4.0+)
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>

在子组件上监听自定义事件 (当子组件触发“my-event”时将调用事件处理器)：
<my-component @my-event="handleThis"></my-component>
内联语句
<my-component @my-event="handleThis(123, $event)"></my-component>
组件中的原生事件
<my-component @click.native="onClick"></my-component>

-->


			<el-card class="box-card" v-loading="dataLoading" >
				<div class="listDemo" v-if="true">
					<ul v-for="(item, index) in demoList">
						<li>
							<span class="t1">{{index}}</span>
							<span class="t2">{{item.title}}</span>
							<span class="t3">{{item.time}}</span>
							<span class="t4">{{item.name}}</span>
							<span class="t5">{{item.text}}</span>
						</li>
					</ul>
				</div>
				<div v-else>
					暂无数据
				</div>
			</el-card>
			
		</div>
		<br><br>
	</div>
</template>

<script>
import { isPhone } from "@/utils/validate";   // 验证函数
import _ from "lodash";   // 延迟函数
import moment from "moment";   // 时间处理函数
moment.locale('zh-cn');

import { $ajaxExample } from '@/api'; 	// ajax
import { Message } from 'element-ui' 	// 组件

export default {
  	name: 'Life',
	data() {
          return {
			    msg : '生命周期 message',
			    rawHtml: '<div style="font-size:18px; color:#f00; font-weight:bold;">这里展示html内容</div>',
                testInput: '',
                thisTime: 1523498738,
                url: '####',
				firstName: '刘',
				dataLoading:false,
				demoList:[],
		  }
    },
    // 计算属性
	computed: {
        // 不同的是计算属性是基于它们的依赖进行缓存的。
        // 计算属性只有在它的相关依赖发生改变时才会重新求值，只要 msg 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数
	    reversedMessage: function () {
			return this.msg.split('').reverse().join('')
        },
        fullName: function () {
            return this.firstName + ' ' + this.testInput
		},

		// 读取和设置
		msgPlus: {
			get: function () {
				return this.a + 1
			},
			set: function (v) {
				this.a = v - 1
			}
		}
    },
    // 监听器
    watch:{
        testInput(newVal,oldVal){
            this.getInput();
        }
    },
	// 过滤器
    filters:{
        dateFrm:function(el){
			return moment(el,'X').format("YYYY-MM-DD HH:mm:ss");   // 对传值的时间戳 初始化
			// return moment().format('YYYY-MM-DD HH:mm:ss');   // 当前日期 初始化
			// return moment(el,'X').fromNow();   // 返回xx小时前 
			// return moment().format('d');   // 返回当前星期几
        }
    },
	methods:{
		doSomething(){
			var self = this;
			if( !isPhone(self.testInput) ) {
				Message({
					message: '请输入正确手机号码',
					type: "error"
				});
				return false;
			};
			self.dataLoading = true;
			$ajaxExample.getDemoList({
				"tel":self.testInput
			},function(response){
				self.dataLoading = false;
				self.demoList = response.data.list;
			},function(error){

			});
		},
		onSubmit(){
			this.doSomething();
		},
		
        // debounce:如果电梯里有人进来，等待15秒。如果又人进来，15秒等待重新计时，直到15秒超时，开始运送
        getInput:_.debounce(
            function () {
				// 这里可以放ajax请求
				this.doSomething();
                console.log(this.testInput);
            },
            // 这是我们为判定用户停止输入等待的毫秒数
            500
        )
	}
}
</script>

<style lang="scss" scoped>
@import './syntax.scss';
</style>