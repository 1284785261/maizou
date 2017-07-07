<template>
	
	<div id="dessit">
		
		<div class="heaa">
			<i class="iconfont" @click="goBack">&#xe607;</i>
			<span>卖座·HOPPA演出</span>
		</div>
		<div class="com">
			<span>详情</span><span>下单</span><span>支付</span>
		</div>
		<dl class="xs">
			<dt>
				<img :src="this.desit.skuList[0].images[1]" />
			</dt>
			<dd>
				<p>{{desit.masterName}}</p>
				<p style="width: 100px;font-size: 12px;color: #ccc;margin-top: 20px;">{{desit.slaveName}}</p>
				<p class="mons">280-1080元</p>
			</dd>
			
		</dl>
		<p class="bt">演出详情</p>
		
		<div class="imgs" v-html="this.img"></div>
		<router-link :to="{path:'/order/dessit/xiadan',query:{id:this.id}}" class="xyb">下一步</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	import router from '../../../router'
	import Vue from 'vue'
	import axios from 'axios'
	
	export default{
		data(){
			return{
				id:null,
				desit:null,
				dessit:null,
				img:null
				
			}
		},
		
		methods:{
			goBack(){
				router.go(-1);
			}
		},
		created(){
			//获取数据
			var timestamp = Date.parse(new Date());
			this.id = this.$route.query.id;
			axios.get(`/schedule/${this.id}?__t=${timestamp}`)
					.then((response)=>{
						
						this.desit=response.data.data;
						//console.log(this.desit);
					})
					.catch((error)=>{
						console.log(error);
					})
			
			axios.get(`/schedule/${this.id}/description?__t=${timestamp}`)
				.then((response)=>{
					
					this.dessit=response.data.data;
					this.img = this.dessit.desc;
					//console.log(this.dessit);
				})
				.catch((error)=>{
					console.log(error);
				})
		},
		beforeMount(){
			this.id !=null,
			this.desit != null,
			this.dessit.desc !=null,
			this.desit.skuList[0] !=null,
			this.img !=null
			//window.location.reload();
			
		}
	}
</script>

<style>
	#dessit{
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 40;
		
	}
	.heaa{
		width: 100%;
		height: 44px;
		background: #000000;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 25;
	}
	.heaa i{
		color: #0077DD;
	    font-size: 20px;
	    line-height: 44px;
	    margin-left: 15px;
	    position: absolute;
	}
	.heaa span{
		color: white;
    line-height: 44px;
    font-size: 14px;
    width: 180px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 40px;
	}
	.com{
		position: absolute;
		left: 0;
		top: 54px;
		width: 100%;
		height: 100%;
		background: #fff;
		text-align: center;
		
	}
	.com span{
		margin-top: 30px;
	    padding: 22px;
	    line-height: 4px;
	    border-bottom: 1px solid #ccc;
	}
	.imgs{
		position: absolute;
		left: 0;
		top: 330px;
		
		
	}
	.imgs img{
		width: 375px!important;
		height: 100%;
	}
	.xs{
		width: 100%;
	    height: 157px;
	    position: absolute;
	    left: 0;
	    top: 118px;
	    border-bottom: 10px solid #eee;
	}
	.xs dt img{
		width: 96px;
		height: 140px;
		margin-left: 10px;
		margin-right: 10px;
	}
	.xs dt{
		float: left;
	}
	.xs dd{
		float: left;
		width: 250px;
	}
	.bt{
		position: absolute;
	    left: 41%;
	    top: 45%;
	    z-index: 20;
	    font-size: 20px;
	}
	.mons{
		font-size: 20px;
		margin-top: 10px;
   		color: #ff5000;
	}
	.xyb{
		width: 100%;
		height: 49px;
		position: fixed;
		left: 0;
		bottom: 0;
		background: #ff5000;
		text-align: center;
		display: block;
		line-height: 49px;
		z-index: 25;
		font-size: 20px;
		color: white;
	}
</style>