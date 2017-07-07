<template>
	<div id="banner">
		<header class="shopheaders">
			<i class="iconfont" @click="goBack">&#xe607;</i>
			<span>卖座商城</span>
		</header>
		<div class="bit">
			<img :src="this.dest.image" />
			<span>{{this.dest.name}}</span>
		</div>
		<div class="shsp">
			<dl v-for="item in this.dest2"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<router-link :to="{path:'/shop/banner/dess',query:{id:item.id}}">
				<dt><img :src="item.skuList[0].image"/></dt>
				<dd>
					<p>{{item.masterName}}</p>
					<span>￥{{(item.skuList[0].price/100).toFixed(2)}}</span>
					<span>已售{{item.skuList[0].salesCount}}</span>
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
				name:"",
				dest:null,
				id:null,
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
				
			},
			loadMore(){
			//获取加载更多数据
				
				this.page+=1;
				this.loading = true;
				setTimeout(()=>{
					axios.get(`/category/items?id=${this.id}&page=${this.page}&num=${this.num}`)
						.then((response)=>{
							
							this.dest2.push(response.data.data.list);
							console.log(this.dest2);
						})
						.catch((error)=>{
							console.log(error);
					})
					this.loading = false;
				},1000);
			}
		},
		created(){
			//console.log(this.$route.query.url);
			this.id= this.$route.query.url.substr(51);
			
			//console.log(this.name);
			//http://aura.maizuo.com/api/category?id=9
			//http://aura.maizuo.com/api/category/items?id=8&page=1&num=20
			
		//获取数据
			
			axios.get(`/category?id=${this.id}`)
				.then((response)=>{
					
					this.dest = response.data.data;
					//console.log(this.dest);
				})
				.catch((error)=>{
					console.log(error);
					})
			axios.get(`/category/items?id=${this.id}&page=${this.page}&num=${this.num}`)
				.then((response)=>{
					
					this.dest2 = response.data.data.list;
					//console.log(this.dest2);
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
	#banner{
		width: 100%;
		height: 100%;
		background: #eee;
		z-index: 30;
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
		z-index: 30;
		width: 100%;
		height: 100%;
		background: #eee;
		
	}
	.shsp dl{
		width: 180px;
		height: 235px;
		float: left;
		background: #fff;
		border: 3px solid #ccc;
	}
	.shsp dl a dt{
		width: 175px;
		height: 175px;
	}
	.shsp dl a dt img{
		width: 175px;
		height: 175px;
	}
	.shsp dl a dd p{
		font-size: 12px;
		height: 30px;
		color: #000;
	}
	.shsp dl  a dd span:nth-child(2){
		font-size: 12px;
		color: orangered;
	}
	.shsp dl a dd span:nth-child(3){
		font-size: 12px;
		margin-left: 10px;
		color: #ccc;
	}
</style>