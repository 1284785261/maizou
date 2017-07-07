<template>
	<div>
	<div class="banner4">
				    <mt-swipe :auto="4000" class="lunbo">
				      
					  <mt-swipe-item v-for="item in lunbo" class="fd"><img :src="item.imageUrl" />
					  <div class="bes3"></div>
					  </mt-swipe-item>
					 
					 
					</mt-swipe>
					
	</div>
				<div class="coots3">
				<mt-loadmore :top-method="loadTop"  :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore" :bottomAllLoaded="!canloadMore">
					<ul class="cd">
						<li>
							<i class="iconfont">&#xe737;</i>
							<p>卖座演出</p>
							<p>折扣特惠享不断</p>
						</li>
						<li>
							<i class="iconfont">&#xe747;</i>
							<p>周边·好货</p>
							<p>全场包邮￥9.9起</p>
						</li>
						<li>
							<i class="iconfont">&#xe635;</i>
							<p>电影实验室</p>
							<p>让你大开眼界</p>
						</li>
						<li>
							<i class="iconfont">&#xe637;</i>
							<p>福利大放送</p>
							<p>免费电影票天天领</p>
						</li>
					</ul>
					<ul class="list">
						<li class="item2" v-for="item in listData">
							<dl>
								<dt><img :src="item.cover.origin" /></dt>
								<dd>
									<p class="name">{{item.name}}</p>
									<p class="jj">{{item.intro}}</p>
									<span class="sum1">活动时间:<i>{{value=item.premiereAt | date }}</i></span>
								</dd>
							</dl>
						</li>
					</ul>
					<p v-show="!canloadMore">没有更多数据了</p>
				</mt-loadmore>
				
	</div>
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
	
	
	Vue.filter('date',function(value){
			var date = new Date(value);
			let y = date.getFullYear();
			let m = date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1;
			let d = date.getDate()<10?'0'+date.getDate():date.getDate();
			
			var t = y + '-' + m + '-' + d;
			return t;
		})
	export default{
		data(){
			return{
				listData:[],
				name:'icon-dingwei',
				lunbo:{},
				list:{},
				page:1,
				count:2,
				canloadMore:true,
				allLoaded:false,
				
				
				
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
//			  var i=1;
//			  this.page+=i;
//			  console.log(this.page);
//			  const that = this;
//			  setTimeout(()=>{
//			  	
//			  		axios.get(`/api/film/now-playing?page=${that.page}&count=${that.count}`)
//					.then((response)=>{
//						for(let i =0 ;i<response.data.data.films.length;i++){
//							this.listData.push(response.data.data.films[i]);
//						}
//						
//	
//					})
//					.catch((error)=>{
//						console.log(error);
//					})
//					this.allLoaded = true;
//					this.$refs.loadMore.onBottomLoaded();
//					if(this.page >=10){
//						this.canloadMore = false;
//						return;
//					}
//			  },2000);
//			  
			  
			}
		},
		created(){
			var timestamp = Date.parse(new Date());
			//console.log(timestamp);
			axios.get(`/api/billboard/home?__t=${timestamp}`)
					.then((response)=>{
						
						this.lunbo = response.data.data.billboards;
						
					})
					.catch((error)=>{
						console.log(error);
					})
					
			axios.get(`/api/film/now-playing?page={{this.page}}&count=2`)
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

.banner4 {
	height: 150px;
	background: #0077DD;
	position: absolute;
	top: 74px;
	left: 0;
	width: 100%;
	overflow: hidden;
	z-index: 16;
}
.ics{
	position: absolute;
	right: 20px;
	top: 20px;
}
.bes3{
	width: 100%;
	height: 9px;
	background: url(../../../img/1.png) repeat-x ;
	background-size: 15px 15px;
	z-index: 16;
	position: absolute;
	left: 0;
	bottom: 0;
}
.cd{
	width: 100%;
	height: 150px;
}
.cd li{
	width: 50%;
	float: left;
	margin-bottom: 10px;
	margin-top: 10px;
}
.cd li i{
	width: 30px;
	height: 30px;
	text-align: center;
	float: left;
	color: #FFA500;
	font-size: 25px;
	background: #42B983;
	border-radius: 50%;
	margin:10px;
}
.cd li p:nth-child(2){
	font-size: 16px;
	margin-bottom: 5px;
}
.cd li p:nth-child(3){
	font-size: 14px;
}
.coots3{
width: 100%;
height: 395px;
overflow: auto;
z-index: 16;
position: absolute;
top: 220px;
bottom: 49px;
left: 0;
background: #fff;
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
.item2{
	position: relative;
	height: 100px;
}
.item2 dl{
	width: 100%;
	height: 100px;
}
.item2 dl dt{
	width: 25%;
	height: 100px;
	float: left;
}
.item2 dl dt img{
	width: 60px;
    height: 80px;
    padding: 10px;
}
.item2 dl dd{
	width: 75%;
	height: 100px;
	float: left;
	position: relative;
}
.item2 dl dd .name{
	font-size: 16px;
	color: black;
	margin-top: 10px;
}
.item2 dl dd .pf{
	position: absolute;
	right: 10%;
	top: 10px;
	font-size: 16px;
	color: orange;
}
.item2 dl dd .jj{
	font-size: 12px;
	color: #ccc;
	margin-top: 15px;
    margin-bottom: 10px;
}
.item2 dl dd .sum1{
	font-size: 12px;
	color: orange;
	margin-right: 20px;
}
.item2 dl dd .sums{
	font-size: 12px;
	color: #ccc;
}
.item2 dl dd .sums i,.item2 dl dd .sum1 i{
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
}.mint-loadmore-bottom{
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: -20px;
	left: 0;
}
</style>