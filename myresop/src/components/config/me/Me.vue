<template>
	<div id="me">
		<header class="meHead" @click="du">
			<i class="iconfont ic">&#xe62b;</i>
			<p >点击登录</p>
			<i class="iconfont is">&#xe613;</i>
		</header>
		<div class="conss">
			<ul class="ul1">
				<li>
					<i class="iconfont" style="color: orange;" @click="du">&#xe639;</i>
					<p>影票订单</p>
				</li>
				<li>
					<i class="iconfont" style="color: #42B983;" @click="du">&#xe632;</i>
					<p>商城订单</p>
				</li>
				<li>
					<i class="iconfont" style="color: orangered;" @click="du">&#xe737;</i>
					<p>演出订单</p>
				</li>
			</ul>
			
			
			<ul class="ul2">
				<li style="margin-bottom: 10px;" @click="du">
					<i class="iconfont">&#xe6f6;</i>
					<span>会员中心</span>
					<i class="iconfont">&#xe610;</i>
				</li>
				<li style="margin-bottom: 10px;" @click="du">
					<i class="iconfont">&#xe6e3;</i>
					<span>卖座卡</span>
					<i class="iconfont">&#xe610;</i>
				</li>
				<li @click="du">
					<i class="iconfont">&#xe6e6;</i>
					<span>预售卡</span>
					<i class="iconfont">&#xe610;</i>
				</li>
				<li @click="du">
					<i class="iconfont">&#xe6ed;</i>
					<span>现金券</span>
					<i class="iconfont">&#xe610;</i>
				</li>
				<li style="margin-bottom: 10px;">
					<i class="iconfont">&#xe63c;</i>
					<span>余额</span>
					
				</li>
				<li @click="du">
					<i class="iconfont">&#xe605;</i>
					<span>设置</span>
					<i class="iconfont">&#xe610;</i>
				</li>
			</ul>
		</div>
		
	</div>
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
			du:function(){
				this.$router.push({path:'/me/denglu'})
			}
		},
		created(){
			
		}
	}
</script>

<style>
	#me{
		width: 100%;
		height: 100%;
		background: #eee;
	}
	.meHead{
		width: 100%;
		height: 210px;
		text-align: center;
		background: #000;
	}
	.meHead .ic{
		font-size: 61px;
	    color: #fff;
	    position: absolute;
	    left: 42%;
	    top: 5%;
	}
	.meHead .is{
		font-size: 20px;
	    color: #fff;
	    position: absolute;
	    left: 90%;
	    top: 2%;
	}
	.meHead p{
		font-size: 17px;
	    color: #fff;
	    position: absolute;
	    left: 41%;
	    top: 20%;
	}
	.ul1{
		width: 100%;
		height: 60px;
		display: flex;
		overflow: hidden;
		background: #fff;
	}
	.ul1 li{
		flex: 1;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.ul1 li i{
		display: inline-block;
		font-size: 26px;
		margin-top: 5px;
		margin-bottom: 5px;
	}
	.ul1 li p{
		font-size: 12px;
	}
	.ul2{
		width: 100%;
		margin-top: 10px;
	}
	.ul2 li{
		width: 100%;
		height: 50px;
		background: #fff;
		position: relative;
	}
	.ul2 li i:nth-child(1){
		font-size: 24px;
		line-height: 50px;
		position: absolute;
		left: 15px;
		top: 0;
		color: #B8860B;
	}
	.ul2 li span{
		line-height: 50px;
		font-size: 14px;
		margin-left: 60px;
	}
	.ul2 li i:nth-child(3){
		font-size: 14px;
	    line-height: 50px;
	    float: right;
	    margin-right: 10px;
		color: aqua;
	}
</style>