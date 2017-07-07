<template>
	<div id="dess">
		<header class="shopheaders">
			<i class="iconfont" @click="goBack">&#xe607;</i>
			<span>卖座商城</span>
		</header>
		<div class="mar">
			<!--<swiper :options="swiperOption2" class="pies">
					 	<swiper-slide v-for="ie in this.ids.skuList[0].images" class="pic-swipes">
					 		 <div class="control-lists">
	                                <img :src="ie">                                            
	                         </div>
					 	</swiper-slide>
			</swiper>  -->
			<!--<div class="nr">
				<p class="namse">{{this.ids.masterName}}</p>
				<p class="se">{{this.ids.staveName}}</p>
				<p class="dessprice">￥{{(this.ids.skuList[0].price/100).toFixed(2)}}</p>
				<span class="count">快递：{{(this.ids.displaySalesCount/100).toFixed(2)}}元</span>
				<span>销量：{{this.ids.isMember}}</span>
				<span style="text-align: right;">全国</span>
			</div>-->
			<p class="dingdan">
				<span>X 1</span>
				<i class="iconfont">&#xe612;</i>
			</p>
			<div v-html="this.tp" class="tp"></div>
		</div>
		
		<div class="dis">
			<router-link :to="'/shop'">
				<i class="iconfont">&#xe747;</i>
				<p>首页</p>
			</router-link>
			<a class="buy">立即购买</a>
		</div>
	</div>
</template>

<script>
	import router from '../../../router'
	import Vue from 'vue'
	import axios from 'axios'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	
	Vue.use(VueAwesomeSwiper)
	
	export default{
	
		data(){
			return{
				id:null,
				tp:null,
				ids:null,
				swiperOption2: {
					loop:true,
					autoplay:2000,
					pagination:'.swiper-pagination',
				    autoHeight: true,
		        }
			}
			
		},
		methods:{
			goBack(){
				console.log(router);
				setTimeout(()=>{
					router.go(-1);
				},1000);
				
			}
		},
		created(){
			this.id = this.$route.query.id;
//			axios.get(`/item?id=${this.id}`)
//				.then((response)=>{
//					this.ids = response.data.data;
//					console.log(this.ids);
//				})
//				.catch((error)=>{
//					console.log(error);
//			})
		//获取数据
				
			axios.get(`/item/desc?id=${this.id}`)
				.then((response)=>{
					this.tp = response.data.data.desc;
					//console.log(this.tp);
				})
				.catch((error)=>{
					console.log(error);
			})	
		},
		beforeMount(){
			this.id !=null,
			this.ids !=null,
			this.ids.skuList[0] !=null
		}
	
	}
</script>

<style>
	
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
	.pies{
		width: 375px;
		height: 375px;
	}
	.shopheaders i{
		font-size: 18px;
	    color: #FF5722;
	    margin-left: 10px;
	}
	.mar{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 44px;
		left: 0;
		background: #eee;
	}
	.tp{
		margin-top: 10px;
	}
	.tp p img{
		width: 100%!important;
	}
	.control-lists img{
		width: 375px;
		height: 375px;
	}
	.namse{
		font-size: 16px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.se{
		font-size: 12px;
	    color: #757575;
	    margin-top: 4px;
	}
	.dessprice{
		margin-top: 4px;
	    color: #ff5000;
	    font-size: 21px;
	    font-weight: 700;
	}
	.nr{
		background: #fff;
	}
	.nr span{
		display: inline-block;
	    width: 32%;
	    color: #757575;
	    text-align: center;
	    font-size: 12px;
	}
	.dingdan{
		margin-top: 10px;
		width: 100%;
		height: 40px;
		background: #fff;
	}
	.dingdan span{
		line-height: 40px;
		margin-left: 20px;
	}
	.dingdan i{
		float: right;
		margin-right: 20px;
		line-height: 40px;
	}
	.dis{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 49px;
		background: #fff;
		z-index: 31;
	}
	.dis a i{
		font-size: 24px;
   		margin-left: 24px;
   		padding-top: 10px;
   	 	color: #FF0000;
	}
	.dis a p{
		font-size: 15px;
	    margin-top: -5px;
	    opacity: .54;
	    margin-left: 20px;
	}
	.dis .buy{
		color: #fff;
	    font-size: 16px;
	    float: right;
	    width: 33%;
	    height: 100%;
	    text-align: center;
	    line-height: 48px;
	    position: absolute;
	    right: 0;
	    top: 0;
	    background-color: #ff5000;
	} 
</style>