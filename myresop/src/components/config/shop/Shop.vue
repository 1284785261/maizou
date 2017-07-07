<template>
	<div id="shop">
		<header class="shopheader">
			<span>商城</span><i class="iconfont">&#xe60f;</i>
		</header>
		<div class="content6">
			<div class="lus">
			 <mt-swipe :auto="4000" class="lunbo">
				      
					  <mt-swipe-item v-for="item in lunbo" class="fd"><img :src="item.imageSrc" />
					  	<div class="bes"></div>
					  </mt-swipe-item>
			 </mt-swipe>
			 </div>
			 <ul class="bannes">
			 	<li v-for="ites in banns">
			 		<router-link :to="{path:'/shop/banner',query:{url:ites.url}}">
				 		<img :src="ites.imageSrc" />
				 		<p>{{ites.name}}</p>
				 		
			 		</router-link>
			 	</li>
			 </ul>
			 <div class="fds">
			 	<div class="mts" v-for="it in tuijian">
			 		<router-link :to="{path:'/shop/banner2',query:{url:it.url}}">
			 			<img :src="it.imageSrc" />
			 		</router-link>
			 	</div>
			 </div>
			 <div class="zc">
			 	<p>有品专区</p>
			 	
			 	<div class="mss" v-for="ins in zhuanchang">
			 		<!--<router-link :to="{path:'/shop/banner2',query:{url:ins.url}}">-->
			 		<img :src="ins.imageSrc"  />
			 		<!--</router-link>-->
			 	</div>
			 	
			 </div>
			 <div class="cs">
			 	<router-link :to="{path:'/shop/banner2',query:{url:this.yellow[0].url}}">
			 		<img :src="this.yellow[0].imageSrc">
			 	</router-link>
			 	<swiper :options="swiperOption">
				 	<swiper-slide v-for="is in this.yellow[0].products" class="pic-swipe">
				 		<router-link :to="{path:'/shop/dess',query:{id:is.id}}">
				 		 <div class="control-list">
                                <img :src="is.image">                                            
                                <p class="control-name">{{is.name}}</p>
                                <p class="control-price">￥{{(is.price/100).toFixed(2)}}</p>    
                         </div>
                        </router-link>
				 	</swiper-slide>
				 	
				 <a class="bug">全部</a>
			 	 </swiper>  
			 </div>
			 <div class="cs">
			 	<router-link :to="{path:'/shop/banner2',query:{url:this.bianxing[0].url}}">
			 		<img :src="this.bianxing[0].imageSrc">
			 	</router-link>
			 	<swiper :options="swiperOption">
				 	<swiper-slide v-for="is in this.bianxing[0].products" class="pic-swipe">
				 		<router-link :to="{path:'/shop/dess',query:{id:is.id}}">
				 		 <div class="control-list">
                                <img :src="is.image">                                            
                                <p class="control-name">{{is.name}}</p>
                                <p class="control-price">￥{{(is.price/100).toFixed(2)}}</p>    
                         </div>
                         </router-link>
				 	</swiper-slide>
				 	
				 <a class="bug">全部</a>
			 	 </swiper>  
			 </div>
			 <div class="cs">
			 	<router-link :to="{path:'/shop/banner2',query:{url:this.dashu[0].url}}">
			 		<img :src="this.dashu[0].imageSrc">
			 	</router-link>
			 	<swiper :options="swiperOption">
				 	<swiper-slide v-for="is in this.dashu[0].products" class="pic-swipe">
				 		<router-link :to="{path:'/shop/dess',query:{id:is.id}}">
				 		 <div class="control-list">
                                <img :src="is.image">                                            
                                <p class="control-name">{{is.name}}</p>
                                <p class="control-price">￥{{(is.price/100).toFixed(2)}}</p>    
                         </div>
                         </router-link>
				 	</swiper-slide>
				 	
				 <a class="bug">全部</a>
			 	 </swiper>  
			 </div>
			 <div class="cs">
			 	<router-link :to="{path:'/shop/banner2',query:{url:this.dishini[0].url}}">
			 		<img :src="this.dishini[0].imageSrc">
			 	</router-link>
			 	<swiper :options="swiperOption">
				 	<swiper-slide v-for="is in this.dishini[0].products" class="pic-swipe">
				 		<router-link :to="{path:'/shop/dess',query:{id:is.id}}">
				 		 <div class="control-list">
                                <img :src="is.image">                                            
                                <p class="control-name">{{is.name}}</p>
                                <p class="control-price">￥{{(is.price/100).toFixed(2)}}</p>    
                         </div>
                         </router-link>
				 	</swiper-slide>
				 	
				 <a class="bug">全部</a>
			 	 </swiper>  
			 </div>
			  <div class="cs">
			  	<router-link :to="{path:'/shop/banner2',query:{url:this.duola[0].url}}">
			 		<img :src="this.duola[0].imageSrc">
			 	</router-link>
			 	<swiper :options="swiperOption">
				 	<swiper-slide v-for="is in this.duola[0].products" class="pic-swipe">
				 		<router-link :to="{path:'/shop/dess',query:{id:is.id}}">
				 		 <div class="control-list">
                                <img :src="is.image">                                            
                                <p class="control-name">{{is.name}}</p>
                                <p class="control-price">￥{{(is.price/100).toFixed(2)}}</p>    
                         </div>
                        </router-link>
				 	</swiper-slide>
				 	
				 <a class="bug">全部</a>
			 	 </swiper>  
			 </div>
			 <div class="cs">
			 	<router-link :to="{path:'/shop/banner2',query:{url:this.lan[0].url}}">
			 		<img :src="this.lan[0].imageSrc">
			 	</router-link>
			 	<swiper :options="swiperOption">
				 	<swiper-slide v-for="is in this.lan[0].products" class="pic-swipe">
				 		<router-link :to="{path:'/shop/dess',query:{id:is.id}}">
				 		 <div class="control-list">
                                <img :src="is.image">                                            
                                <p class="control-name">{{is.name}}</p>
                                <p class="control-price">￥{{(is.price/100).toFixed(2)}}</p>    
                         </div>
                         </router-link>
				 	</swiper-slide>
				 	
				 <a class="bug">全部</a>
			 	 </swiper>  
			 </div>
			 
			 <div class="gd">
			 	<p>好货精选</p>
			 	<p>暂无数据</p>
			 	<p>貌似没有更多了~</p>
			 </div>
		</div>
		
	</div>
</template>

<script>
	
	import router from '../../../router'
	import Vue from 'vue'
	import { Swipe, SwipeItem} from 'mint-ui';
	import axios from 'axios'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	Vue.use(VueAwesomeSwiper)
	
	
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	
	export default{
		data(){
			return{
				list:null,
				lunbo:[],
				banns:[],
				tuijian:[],
				zhuanchang:[],
				yellow:null,
				bianxing:null,
				dashu:null,
				dishini:null,
				duola:null,
				lan:null,
				swiperOption: {
				    autoHeight: true,
		        }
			}
		},
		methods:{
			
		},
		created(){
			
		//获取数据
			
			axios.get(`/ad/list`)
					.then((response)=>{
						
						this.list=response.data.data;
						console.log(this.list);
						//this.districts = response.data.data.cinemas;
						this.lunbo=response.data.data.slice(8,11);
						this.banns=response.data.data.slice(0,8);
						this.tuijian = response.data.data.slice(11,13);
						this.zhuanchang = response.data.data.slice(13,16);
						this.yellow = response.data.data.slice(16,17);
						this.bianxing = response.data.data.slice(17,18);
						this.dashu = response.data.data.slice(18,19);
						this.dishini = response.data.data.slice(19,20);
						this.duola = response.data.data.slice(20,21);
						this.lan = response.data.data.slice(21,22);
						console.log(this.list);
						console.log(this.lunbo);
						console.log(this.banns);
						console.log(this.tuijian);
						console.log(this.zhuanchang);
						console.log(this.yellow);
					})
					.catch((error)=>{
						console.log(error);
					})
			
			
		},
		beforeMount(){
				this.list!=null,
				this.lunbo!=[],
				this.banns!=[],
				this.tuijian!=[],
				this.zhuanchang!=[],
				this.yellow!=null,
				this.bianxing!=null,
				this.dashu!=null,
				this.dishini!=null,
				this.duola!=null,
				this.lan!=null
		}
	}
</script>

<style>
	#shop{
		width: 100%;
		height: 100%;
		background: #eee;
	}
	.shopheader{
		height: 44px;
		width: 100%;
		background: #fff;
	}
	.shopheader span{
		line-height: 44px;
		margin-left: 20px;
	}
	.shopheader i{
		color: dodgerblue;
		float: right;
		line-height: 44px;
		margin-right: 10px;
    	font-size: 20px;
	}
	.content6{
		width: 100%;
		float: left;	
		border-bottom: 1px solid #ccc;
		position: fixed;
		left: 0;
		top: 44px;
		bottom: 49px;
		overflow: auto;
		
	}
	.mint-swipe-indicators{
	position: absolute;
	top: 126px;
	left: 45%;
}
.lus{
	width: 100%;
	height: 150px;
	position: relative;
}
.lunbo{
	overflow: hidden;
	
}
.lunbo .mint-swipe-items-wrap{
	width: 100%;
	height: 150px;
	overflow: hidden;
	float: left;
}
.lunbo .mint-swipe-item{
	width: 100%;
	height: 150px;
	float: left;
	position: absolute;
	left: 0;
	top: 0;
}
.lunbo .bes{
	width: 100%;
	height: 5px;
	background: url(../../../img/1.png) repeat-x ;
	background-size: 15px 15px;
	z-index: 10;
	position: absolute;
	left: 0;
	bottom: 0;
}
.mint-swipe-indicators{
	position: absolute;
	top: 126px;
	left: 45%;
}
.mint-swipe-indicator{
	width: 5px;
	height: 5px;
	background: red;
	float: left;
	margin-right: 10px;
}
.mint-swipe-item img{
	height: 150px;
	width: 100%;
}
.mint-swipe-indicators .is-active{
	background: gray;
}

.bannes{
	background: #fff;
}
.bannes li{
	width: 25%;
    height: 100%;
    margin: 8px 0;
    text-align: center;
    display: inline-block;
    background-color: #fff;
    padding: 10px 0;
}
.bannes li img{
	width: 40px;
	height: 40px;
}
.bannes li p{
	font-size: 12px;
    text-align: center;
    color: #323232;
}
.fds{
	margin-top: 10px;
    box-sizing: border-box;
    background: #fff;
    width: 100%;
    height: 100px;
}
.mts{
	float: left;
    width: 50%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
.mts img{
	float: left;
   	width: 85%;
   	margin-left: 10px;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 10px;
}
.zc{
	background: #fff;
	margin-top: 10px;
	text-align: center;
	overflow: hidden;
}
.zc p{
	margin: 10px;
}
.zc div:nth-child(2){
	float: left;
    width: 50%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
.zc div:nth-child(2) img{
	width: 175px;
	height: 150px;
}
.zc div:nth-child(3){
	margin-top: 19px;
}
.zc div:nth-child(3) img{
	width: 175px;
	height: 74px;
	
}
.zc div:nth-child(4) img{
	width: 175px;
	height: 74px;
}
.cs{
	width: 100%;
	height: 250px;
	background: #fff;
	margin-top: 10px;
}
.cs img {
	width: 95%;
	margin-left: 2.5%;
	margin-top: 10px;
}
.pic-swipe{
	position: relative;
	width: 130px!important;
	height: 150px;
	background: #fff;
}
.control-list{
	width: 110px;
	height: 150px;
}
.control-list img{
	width: 85px;
	height: 85px;
}
.control-name{
	width: 100px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size: 12px;
	color: #000;
}
.control-price{
	margin:10px;
	font-size: 12px;
	color: orangered;
}
.cs .bug{
	margin-top: 20px;
	line-height: 30px;
	margin-left: 20px;
}
.gd{
	width: 100%;
	text-align: center;
}
.gd p{
	color: #666;
	font-size: 12px;
	line-height: 20px;
}
</style>