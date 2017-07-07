<template>
	<transition name="fade2">
	<div id="denglu">
		<header class="shpheader">
			<i class="iconfont" @click="goBack">&#xe607;</i>
			<span>登录</span>
		</header>
		<div class="inp">
			<input type="text" placeholder="请输入手机号/邮箱" class="zh"/>
			<div class="bb"></div>
			<input type="text" placeholder="请输入密码/验证码" class="mm"/>
			<div class="bb2"></div>
			<a class="zhuce" @click="zhuce">立即注册</a>|<a class="zhuce2" @click="mima">忘记密码?</a>
			<a class="ds">登录</a>
			
		</div>
		
	</div>
	</transition>
</template>

<script>
	import router from '../../../router'
	import Vue from 'vue'
	import axios from 'axios'
	
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			//跳转路由
			goBack(){
				console.log(router);
				this.$router.push({path:'/me'});
			},
			zhuce(){
				this.$router.push({path:'/me/denglu/zhuce'});
			},
			mima(){
				this.$router.push({path:'/me/denglu/mima'});
			}
		},
		created(){
			
		}
	}
</script>

<style>
	#denglu{
		width: 100%;
		height: 100%;
		background: #eee;
	}
	.shpheader{
		height: 44px;
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background: #000;
		z-index: 31;
	}
	.shpheader span{
		line-height: 44px;
		margin-left: 20px;
		
		color: white;
	}
	.shpheader i{
		font-size: 18px;
	    color: #FF5722;
	    margin-left: 10px;
	}
	.inp{
		width: 83.5%;
		padding: 0px 31px 0px 31px;
		position: absolute;
		top: 44px;
		bottom: 0;
		left: 0;
		z-index: 40;
		background: #f6f6f6;
	}
	.zh,.mm{
		
		border: none;
	    background-color: #f6f6f6;
	    border-radius: 0px;
	    box-shadow: none;
	    outline: none;
	    display: block;
	    width: 77%;
	   height: 33px;
   	 padding: 19px 12px;
	    font-size: 14px;
	    line-height: 1.42857143;
	    color: #555;
	}
	.bb{
		position: absolute;
	    top: 48px;
	    height: 12px;
	    width: 82%;
	    border: solid #c4c4c4;
	    border-width: 0 1px 1px 1px;
	}
	.bb2{
		position: absolute;
	    top: 112px;
	    height: 12px;
	    width: 82%;
	    border: solid #c4c4c4;
	    border-width: 0 1px 1px 1px;
	}
	.ds{
		display: block;
	    width: 140px;
	    background-color: #fe8233;
	    color: #fff;
	    border: none;
	    border-radius: 36px;
	    margin-top: 45px;
	    padding: 8px 12px;
	    font-size: 15px;
	    outline: none;
	    margin-left: 70px;
	    text-align: center;
	}
	@keyframes leave {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(0);
		}
	}
	
	@keyframes enter {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	
	.fade2-leave-active {
		animation: leave 1s;
	}
	
	.fade2-enter-active {
		animation: enter 1s;
	}
	.zhuce,.zhuce2{
		font-size: 14px;
		margin: 5px;
		color: orangered;
	}
	.zhuce{
		margin-left: 170px;
	}
</style>