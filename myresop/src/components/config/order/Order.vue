<template>
	<div id="order">
		<header class="heade1">
			<span>演出票务</span>
		</header>
		<div class="content">
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore" :bottomAllLoaded="!canloadMore">
				<ul class="meinv">
					<li v-for="ites in order">
						<router-link :to="{path:'/order/dessit',query:{id:ites.id}}">
						<img :src="ites.skuList[0].image" />
						<p>{{ites.masterName}}</p>
						</router-link>
					</li>
				</ul>
				<p id="but">已经到底了</p>
			</mt-loadmore>
			
		</div>
		
	</div>
</template>

<script>
	import router from '../../../router'
	import Vue from 'vue'
	import axios from 'axios'
	import {Loadmore} from 'mint-ui';
	Vue.component(Loadmore.name, Loadmore);
	export default{
		data(){
			return{
				order:[],
				pages:1,
				allLoaded:false,
				isShow:false,
				canloadMore:true,
				timestamps:null,
				onBottomLoaded:false
			}
		},
		methods:{
			loadTop() {
			  // 上拉刷新
			  this.pages=1;
			  
			  const that = this;
			  setTimeout(()=>{
			  	that.order=[];
				  axios.get(`/schedule?__t=${this.timestamps}&pageSize=6&pageNumber=${that.pages}&sortKey=sortSalesCount&sortType=desc&isMultiSku=1`)
						.then((response)=>{				
							this.order=response.data.data.list;
						})
						.catch((error)=>{
							console.log(error);
						})
			  },2000);
			  this.$refs.loadmore.onTopLoaded();
			  
			},
			
			loadBottom() {
			  // 加载更多数据
			  var m=1;
			  this.pages+=m;
			//  console.log(this.pages);
			  const that = this;
			  setTimeout(()=>{
			  		axios.get(`/schedule?__t=${this.timestamps}&pageSize=6&pageNumber=${that.pages}&sortKey=sortSalesCount&sortType=desc&isMultiSku=1`)
					.then((response)=>{
						//console.log(response);
//						for(let i=0;i<response.data.data.list.length;i++){
//							this.order.push(response.data.data.list);
//							
//						}
						response.data.data.list.map((item,index)=>{
							this.order.push(item);
						})
						//console.log(this.order);

					})
					.catch((error)=>{
						console.log(error);
					})
					this.allLoaded = true;
					this.$refs.loadMore.onBottomLoaded();
					if(this.pages >=3){
						this.canloadMore = false;
						return;
					}
			  },2000);
			  
			  
			}
			
		},
		created(){
			//获取数据
			var timestamp = Date.parse(new Date());
			this.timestamps = timestamp;
			axios.get(`/schedule?__t=${this.timestamps}&pageSize=6&pageNumber=1&sortKey=sortSalesCount&sortType=desc&isMultiSku=1`)
					.then((response)=>{
						
						this.order=response.data.data.list;
						//console.log(this.order);
					})
					.catch((error)=>{
						console.log(error);
					})
			
		},
		beforeMount(){
			this.order!=null;
			
		}
		
	}
</script>

<style>
	.heade1{
		width: 100%;
		height: 44px;
		position: fixed;
		z-index: 21;
		background: #fff;
		border-bottom: 1px solid #ccc;
	}
	#but{
		text-align: center;
		height: 21px;
		width: 100%;
		background: #fff;
		z-index: 25;
		position: absolute;
		left: 0;
    	bottom: -19px;
	}
	.heade1 span{
		line-height: 44px;
		margin-left: 20px;
	}
	.meinv li img{
		width: 355px;
		height: 177px;
		padding: 10px;
	}
	.meinv li a p{
		width: 355px;
		margin-left: 10px;
		color: black;
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