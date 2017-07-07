<template>
	<div>
		<div id="home">
			
			<header class="header">
				<span class="logo"></span>
				<span class="logo1">卖座电影</span>
				<span class="left-btn"><router-link to="/home/address" class='name'>深圳</router-link><i class="iconfont">&#xe609;</i></span>
				
			</header>
			<div class="content">
				<ul class="fenlei" >
					<li><router-link to="/home">热映电影</router-link></li>
					<li><router-link to="/home/collect2" >即将上映</router-link></li>
					<li><router-link to="/home/collect3" >热门活动</router-link></li>
				</ul>
				
				<div class="banner">
				    <mt-swipe :auto="4000" class="lunbo">
				      
					  <mt-swipe-item v-for="item in lunbo" class="fd"><img :src="item.imageUrl" />
					  <div class="bes"></div>
					  </mt-swipe-item>
					 
					 
					</mt-swipe>
					
				</div>
				<div class="coots">
				<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore" :bottomAllLoaded="!canloadMore">
				
					<ul class="list">
						
							<li class="item" v-for="item in listData">
								<router-link :to="{path:'/home/details',query:{id:item.id}}">
									<dl>
										<dt><img :src="item.cover.origin" /></dt>
										<dd>
											<p class="name">{{item.name}}</p><span class="pf">{{item.grade}}</span>
											<p class="jj">{{item.intro}}</p>
											<span class="sum"><i>{{item.cinemaCount}}</i>家影院上映</span><span class="sums"><i>{{item.watchCount}}</i>人购票</span>
										</dd>
									</dl>
								</router-link>
							</li>
						
					</ul>
					
					<p v-show="!canloadMore">没有更多数据了</p>
				</mt-loadmore>
				</div>
			</div>
		</div>
		
		<router-view></router-view>
	</div>
</template>

<script>
	import router from '../../../router'
	import Vue from 'vue'
	import { Swipe, SwipeItem, Loadmore} from 'mint-ui';
	import axios from 'axios'
	
	
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	Vue.component(Loadmore.name, Loadmore);
	export default{
		data(){
			return{
				listData:[],
				name:'icon-dingwei',
				lunbo:{},
				list:{},
				page:1,
				count:7,
				canloadMore:true,
				allLoaded:false,
				counts:null
			}
		},
		methods:{
			loadTop() {
			  // 上拉刷新
			  this.page=1;
			  
			  const that = this;
			  setTimeout(()=>{
			  	that.listData=[];
				  axios.get(`/api/film/now-playing?page=${that.page}&count=${that.count}`)
						.then((response)=>{				
							this.listData = response.data.data.films;
						})
						.catch((error)=>{
							console.log(error);
						})
			  },2000);
			  this.$refs.loadmore.onTopLoaded();
			  
			},
			
			loadBottom() {
			  // 加载更多数据
			  var i=1;
			  this.page+=i;
			  console.log(this.page);
			  const that = this;
			  setTimeout(()=>{
			  	
			  		axios.get(`/api/film/now-playing?page=${that.page}&count=${that.count}`)
					.then((response)=>{
						for(let i =0 ;i<response.data.data.films.length;i++){
							this.listData.push(response.data.data.films[i]);
						}
						
	
					})
					.catch((error)=>{
						console.log(error);
					})
					this.allLoaded = true;
					this.$refs.loadMore.onBottomLoaded();
					if(this.page >=10){
						this.canloadMore = false;
						return;
					}
			  },2000);
			  
			  
			}
		},
		created(){
//			this.$http.get('api/billboard/home?__t=1498821103361')
//			.then((response)=>{
//				console.log(response);
//			})
//			.catch((error)=>{
//				console.log(error);
//			})
		//获取数据
			var timestamp = Date.parse(new Date());
			console.log(timestamp);
			axios.get(`/api/billboard/home?__t=${timestamp}`)
					.then((response)=>{
						//console.log(response);
						this.lunbo = response.data.data.billboards;
						
					})
					.catch((error)=>{
						console.log(error);
					})
					
			axios.get(`/api/film/now-playing?page={{this.page}}&count={{this.count}}`)
					.then((response)=>{
				
						this.listData = response.data.data.films;
						//console.log(this.listData);
					})
					.catch((error)=>{
						console.log(error);
					})
					
					
		}
	}
</script>

<style>
#home .banner{
	height: 150px;
	background: #0077DD;
	position: relative;
	overflow: hidden;
}
.item{
	position: relative;
}
.item:before{
	content: '';
	transform: scaleY(0.5);
	width: 100%;
	height: 1px;
	position: absolute;
	left: 0;
	bottom: -1px;
	border-bottom: 1px solid #0F0F0F;
}
.fenlei{
	height: 30px;
	width: 100%;
}
.fenlei li{
	height: 30px;
	width: 33%;
	float: left;
	text-align: center;
	
}
.fenlei li a{
	line-height: 30px;
	font-size: 14px;
	color: #666;
}
.fenlei li .router-link-exact-active{
	border-bottom: 2px solid orange;
	color: #FFA500;
}
.coots{
	width: 100%;
	height: 395px;
	overflow: auto;
}
.lunbo{
	height: 100%;
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
.banner .lunbo .bes{
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
	border-radius: 50%;
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
.item dl{
	width: 100%;
	height: 100px;
}
.item dl dt{
	width: 25%;
	height: 100px;
	float: left;
}
.item dl dt img{
	width: 67px;
    height: 75px;
    padding: 10px;
}
.item dl dd{
	width: 75%;
	height: 100px;
	float: left;
	position: relative;
}
.item dl dd .name{
	font-size: 16px;
	color: black;
	margin-top: 10px;
}
.item dl dd .pf{
	position: absolute;
	right: 10%;
	top: 10px;
	font-size: 16px;
	color: orange;
}
.item dl dd .jj{
	font-size: 12px;
	color: #ccc;
	margin-top: 15px;
    margin-bottom: 10px;
}
.item dl dd .sum{
	font-size: 12px;
	color: #ccc;
	margin-right: 20px;
}
.item dl dd .sums{
	font-size: 12px;
	color: #ccc;
}
.item dl dd .sums i,.item dl dd .sum i{
	font-size: 12px;
	color: #42B983;
	font-style: normal;
}
.mint-loadmore-top{
	width: 100%;
	text-align: center;
	position: absolute;
	top: -20px;
	left: 0;
}
.mint-loadmore-bottom{
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: -20px;
	left: 0;
}
</style>