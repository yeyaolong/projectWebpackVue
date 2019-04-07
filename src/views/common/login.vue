<!--
    登录功能
    @author：huhl
    @createTime：2018-04-10 12:20
 -->
<template lang="html">
	<div class="loginBg">
        <div class="loginBox">
            <div class="logo"><img src="@/assets/images/login/logo.png" alt="浙江电信进销存管理系统"></div>
            <div class="loginContent">
                <div class="leftPic">
                    <img src="@/assets/images/login/loginLeftPic.png" alt="">
                </div>
                <div class="rightLoginBox">
                    <div class="title">欢迎登录</div>
                    <form @submit.prevent="loginSubmit">
                        <div class="loginForm">
                            <i class="iconfont icon-yonghutouxiang"></i>
                            <input type="text" class="iptLoginForm" autocomplete="off" placeholder="请输入用户名" v-model="formName.account">
                        </div>
                        <div class="loginForm">
                            <i class="iconfont icon-mima"></i>
                            <input type="password" class="iptLoginForm" placeholder="请输入密码" v-model="formName.password">
                        </div>
                        <div class="loginForm msg">
                            <i class="iconfont icon-ecurityCode"></i>
                            <input type="text" class="iptLoginForm" maxlength="6" placeholder="请输入验证码" v-model="formName.flag">
                            <button type="button" id="btn_getpwd" class="yzm">验证码</button>
                        </div>
                        <div class="pt10 pb10 pl10 pr10 f12">
                            <br>
                        </div>
                        <div class="btnLay mt10">
                            <button type="submit" class="btnLoginSubmit">{{ loginBtn }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="footer">浙江鸿程计算机系统有限公司</div>
    </div>
</template>

<script>

import { Message } from 'element-ui' 	// 组件
import { isRegisterUserName,isPasswd } from "@/utils/validate";   // 验证函数
import { $ajaxLogin } from '@/api'; 	// ajax
import { mapState } from "vuex";

export default {
    name: 'Login',
    data () {
        return {
            formName: {//表单中的参数
                account: '',
                password: '',
                flag: ''
            },
            loginBtn:'登 录'
        }
    },
	computed:{
		...mapState({
            logined() { 
                return this.$store.state.example.login.logined
            }
		})
    },
    created(){

    },
    methods: {
        ChangeLoginStatus(val){
            return this.$store.dispatch('ChangeLoginStatus', val)
        },
        ChangeLoginNameStatus(val){
            return this.$store.dispatch('ChangeLoginNameStatus', val)
        },
        msgErrorShow(msg){
            Message({
                message: msg,
                type: "error"
            });
        },
        loginSubmit(){
            var self = this;
            if(!isRegisterUserName(self.formName.account)) {
                self.msgErrorShow("请输入正确账号");
				return false;
            }
            if(!isPasswd(self.formName.password)) {
                self.msgErrorShow("请输入正确密码");
				return false;
            }
            if(self.formName.flag.length<6) {
                self.msgErrorShow("请输入正确验证码");
				return false;
            }
            self.loginBtn = "登录中...";
            $ajaxLogin.login({
                "account":self.formName.account,
                "password":self.formName.password,
                "flag":self.formName.flag
			},function(response){
                var data = response.data;
                if(data.message == "success") {
                    // 登录成功
                    self.ChangeLoginStatus(true);
                    self.ChangeLoginNameStatus(data.entity.name);
                    if(window.sessionStorage) {
                        let loginUser = data.entity;
                        window.sessionStorage.setItem("loginUserBaseInfo",JSON.stringify(loginUser));
                        // 跳首页
                        self.$router.push({
                            path: "/"
                        });
                    } else {
                        self.msgErrorShow("浏览器不支持本地存储功能，建议您使用chrome浏览器效果更佳！");
                    }
                } else {
                    // 登录失败
                    self.msgErrorShow(data.message);
                    self.loginBtn = "登 录";
                }
			});
       }
    }
}
</script>
<style lang="scss" scoped>
@import './login.scss';
</style>