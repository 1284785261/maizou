<template>
	<div id="order">
		<header class="head">
			<i class="iconfont" @click="goBack">&#xe607;</i>
			<span class="nam">影院</span>
		</header>
		<div class="content4">
			<span class="na">全部区域、服务</span>
			<span class="na2" @click ="bliu">筛选<i class="iconfont">&#xe612;</i></span>
		</div>
		<div class="wb">
			<ul class="yy">
				
					<li v-for="ite in discove">
						<router-link :to="{path:'/home/film',query:{id:ite.id}}">
							<span class="id">{{ite.name}}<i class="iconfont">&#xe6f6;</i><i class="iconfont">&#xe604;</i></span>
							<span class="dz">￥{{ite.minimumPrice}}起</span>
							<p class="mon">{{ite.address}}</p>
						</router-link>
					</li>
				
			</ul>
		</div>
		
		<div class="shaixu" v-if="show">
				<dl class="dl1">
					<dt><span>区域</span><span>{{this.activeName}}</span></dt>
					<dd v-for="item in this.difang" @click="selected(item)" :class="{active : activeName == item}">{{item}}</dd>
				</dl>
				<dl class="dl2">
					<dt>
						<span>服务</span><span v-for="ites in this.fus" class="b2">{{ites}}</span>
					</dt>
					<dd v-for="(ins,index) in this.fuse" @click="select(index)">{{ins}}</dd>
				</dl>
				<a @click="bliu">取消</a><a class="yes" @click="yse">确定</a>
		</div>
		<div class="zcz" v-if="show"></div>
	</div>
</template>

<script>
	import router from '../../../router'
	import Vue from 'vue'
	import axios from 'axios'
	
	export default{
		data(){
			return{
				discove:null,
				show:false,
				activeName:'',
				activeNames:'',
				districts:[],
				des:false,
				fus:[],
				difang:['宝安区','福田区','光明新区','龙岗区','龙华新区','罗湖区','南山区','坪山新区','盐田区'],
				fuse:['可退费','观影小食','特惠影院','IMAX','价格最低']
			}
			
		},
		methods:{
			
			goBack(){
				console.log(router);
				router.go(-1);
			},
			bliu(){
				this.fus=[];
				if(this.show == true){
					this.show = false;
				}
				else{
					this.show = true;
				}
			},
			selected:function(item){
				this.activeName = item;
			},
			
			select:function(index){
				//console.log(index);
				if(this.fus.length<=this.fuse.length-1){		
					this.fus.push(this.fuse[index]);
						
				}
			},
			yse(){
				const ites =[];
				if(this.show == true){
					this.show = false;
				}
				else{
					this.show = true;
				}
				
				this.districts.map((item)=>{
					if(this.activeName == item.district.name){
						this.discove = null;
						
						ites.push(item);
						
						
					}
					this.discove = ites;
					console.log(this.discove);
				})

//				for(var i =0;i<this.discove.length;i++){
//					if(this.activeName){
//						console.log(this.discove);
//						if(this.activeName == this.discove[i].district.name){
//						this.discove = [];
//						this.discove.push(this.discove[i]);
//						console.log(this.discove);
//						}
//					}
//					
//				}
				
			}
		},
		created(){
			var timestamp = Date.parse(new Date());
			//console.log(timestamp);
			axios.get(`/api/cinema?__t=${timestamp}`)
					.then((response)=>{
						
						this.discove=response.data.data.cinemas;
						this.districts = response.data.data.cinemas;
						//console.log(this.discove);
					})
					.catch((error)=>{
						console.log(error);
					})
		}
	}
</script>

<style>
	#order{
		
		width: 100%;
	    height: 670px;
	    z-index: 22;
	    position: relative;
	    left: 0;
	    top: 0;
	    background: #fff;
	}
	#order .head{
		border-bottom: 1px solid #ccc;
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		background: #000;
	}
	.head i{
		font-size: 18px;
	    color: #FF5722;
	    margin-left: 10px;
	}
	.nam{
		line-height: 44px;
		margin-left: 20px;
		color: white;
	}
	.na{
		margin-left: 10px;
		font-size: 14px;
		line-height: 30px;
		
	}
	.active{
		background: #FFA500;
	}
	.na2{
		font-size: 14px;
		float: right;
		margin-right: 10px;
		line-height: 30px;
	}
	.b2{
		font-size: 12px;
		color: orange;
	}
	.wb{
		position: absolute;
		top: 74px;
		bottom: 2px;
		left: 0;
		width: 100%;
		overflow: auto;
	}
	.content4{
	width: 100%;
	height: 30px;
	float: left;	
	background: #fff;
	border-bottom: 1px solid #ccc;
	position: fixed;
	left: 0;
	top: 44px;
}
	.yy{
		width: 100%;
		height: 800px;
		z-index: 25;
	}
	.yy li{
		width: 100%;
		z-index: 25;
		border-bottom: 1px solid #CCCCCC;
	}
	.yy li a{
		width: 100%;
	    height: 79px;
	    display: inline-block;
	}
	.yy li a .id{
		font-size: 14px;
		display: inline-block;
		margin-top: 20px;
		margin: 10px;
		color: #000;
	}
	.yy li a .id i:nth-child(1){
		color: red;
		margin-left: 5px;
	}
	.yy li a .id i:nth-child(2){
		color: blueviolet;
		margin-left: 5px;
	}
	.yy li a .dz{
		float: right;
		margin-top: 10px;
		margin-right: 10px;
		font-size: 14px;
		color: orange;
	}
	.yy li a .mon{
		color: #666;
		font-size: 12px;
		text-overflow:ellipsis; 
		white-space:nowrap;
		 overflow:hidden;
		width: 80%;
		margin: 10px;
	}
	.shaixu{
		width: 100%;
	    height: 310px;
	    position: absolute;
	    left: 0;
	    top: 44px;
	    background: #fff;
	    z-index: 20;
	}
	.dl1{
		width: 100%;
		height: 150px;
		border-bottom: 1px solid #ccc;
	}
	.dl1 dt{
		width: 100%;
		height: 30px;
	}
	.dl1 dt span{
		line-height: 30px;
		margin: 10px;
	}
	.dl1 dd{
		width: 60px;
		height: 25px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 12px;
		text-align: center;
		line-height: 25px;
		float: left;
		margin: 5px;
		margin-left: 20px;
	}
	.dl2{
		height: 110px;
		border-bottom: 1px solid #ccc;
	}
	
	.dl2 dt{
		width: 100%;
		height: 30px;
	}
	.dl2 dt span{
		line-height: 30px;
		margin: 10px;
	}
	.dl2 dd{
		width: 60px;
		height: 25px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 12px;
		text-align: center;
		line-height: 25px;
		float: left;
		margin: 5px;
		margin-left: 20px;
	}
	.shaixu a{
		width: 50%;
	    height: 40px;
	    line-height: 40px;
	    display: inline-block;
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    text-align: center;
		}
	.shaixu .yes{
		width: 50%;
	    height: 40px;
	    display: inline-block;
	    position: absolute;
	    left: 185px;
	    bottom: 0;
	    text-align: center;
	    color: #00FFFF;
	}
	.zcz{
		width: 100%;
		height: 100%;
		background: #000000;
		position: absolute;
		left: 0;
		top: 44px;
		opacity: 0.4;
	}
</style>