<template>
	<div id="banner2">
		<header class="shopheaders">
			<i class="iconfont" @click="goBack">&#xe607;</i>
			<span>卖座商城</span>
		</header>
			<div class="shsp">
				<dl v-for="item in this.dest2"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
					<router-link :to="{path:'/shop/banner2/dess',query:{id:item.id}}">
					<dt><img :src="item.image"/></dt>
					<dd>
						<p>{{item.name}}</p>
						<span>￥{{(item.price/100).toFixed(2)}}</span>
						<span>已售{{item.salesCount}}</span>
					</dd>
					</router-link>
				</dl>
			</div>
		
	</div>
</template>
<script>
	import router from '../../../router'
	import Vue from 'vue'
	import axios from 'axios'
	import { InfiniteScroll } from 'mint-ui';

	Vue.use(InfiniteScroll);
	
	export default{
		data(){
			return{
				id:null,
				id2:null,
				page:1,
				num:20,
				dest2:[]
			}
		},
		methods:{
			goBack(){
				console.log(router);
				setTimeout(()=>{
					router.go(-1);
				},2000);
				
			}
		},
		created(){
			
		//获取数据
			
			//console.log(this.$route.query.url);
			this.id= this.$route.query.url.substr(49);
			this.id2= this.$route.query.url.substr(47);
			console.log(this.id2);
			axios.get(`/active?id=${this.id}&page=${this.page}&pageSize=${this.num}`)
				.then((response)=>{
					this.dest2 = response.data.data.products;
					console.log(this.dest2);
				})
				.catch((error)=>{
					console.log(error);
			})
		},
		beforeMount(){
			this.id != null;
		}
	}
</script>
<style>
	#banner2{
		width: 100%;
		height: 100%;
		background: #eee;
		z-index: 30;
		position: absolute;
		left: 0;
		top: 0;
		
	}
	.shopheaders{
		height: 44px;
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background: #000;
		z-index: 31;
	}
	.shopheaders span{
		line-height: 44px;
		margin-left: 20px;
		
		color: white;
	}
	.shopheaders i{
		font-size: 18px;
	    color: #FF5722;
	    margin-left: 10px;
	}
	.bit{
		margin-top: 44px;
		width: 100%;
		height: 94px;
		background: url(../../../img/05df54d3.png) no-repeat;
		background-size:cover;
		position: relative;
		
	}
	.bit img{
		width: 50px;
		height: 50px;
		padding: 20px;
	}
	.bit span{
		display: inline-block;
		position: absolute;
		left: 100px;
    	top: 35px;
    	font-size: 18px;
	}
	.shsp{
		width: 100%;
		height: 100%;
		background: #eee;
		position: absolute;
		top: 40px;
		left: 0;
		bottom: 0;
	}
	.shsp dl{
		width: 180px;
		height: 235px;
		float: left;
		background: #fff;
		border: 3px solid #ccc;
		
	}
	.shsp dl dt{
		width: 175px;
		height: 175px;
	}
	.shsp dl dt img{
		width: 175px;
		height: 175px;
	}
	
	.shsp dl dd p{
		font-size: 12px;
		height: 30px;
		color: #000;
	}
	.shsp dl dd span:nth-child(2){
		font-size: 12px;
		color: orangered;
	}
	.shsp dl dd span:nth-child(3){
		font-size: 12px;
		margin-left: 10px;
		color: #ccc;
	}
</style>