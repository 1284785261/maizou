<template>
	<div id="shos">
		<header class="heaa">
			<i class="iconfont" @click="goBack">&#xe607;</i>
			<span>{{title.name}}</span>
		</header>
		<div class="content5">
			<img src="../../../img/5.png">
			
			<ul class="lefts">
				<li><i class="iconfont">&#xe71f;</i></li>
				<li><i class="iconfont">&#xe74b;</i></li>
				<li><i class="iconfont">&#xe639;</i></li>
				<li><i class="iconfont">&#xe609;</i></li>
				<li><i class="iconfont">&#xe608;</i></li>
				
			</ul>
			<ul class="rights">
				<li>
					<span>订座票</span><a>立即订座</a>
					<p>选好场次及座位，到影院自助机取票</p>
				</li>
				<li>
					<span>通兑票</span><a>立即订票</a>
					<p>有效期内到影院前台兑换影票</p>
				</li>
				<li>
					<span style="line-height: 40px;">小卖品</span><a>购买</a>
				</li>
				<li>
					<p style="line-height: 18px;font-size: 14px;color: rgb(0, 0, 0);margin-top: 27px;">{{title.address}}</p>
				</li>
				<li>
					<p style="line-height: 55px;font-size: 16px; color: #000;">{{title.telephones[0]}}</p>
				</li>
			</ul>
			<ul class="dibu">
				<li>
					<div>
						<i class="iconfont">&#xe6ed;</i>
						<i class="iconfont">&#xe6f5;</i>
						<i class="iconfont">&#xe602;</i>
						<i class="iconfont">&#xe733;</i>
						<i class="iconfont">&#xe609;</i>
					</div>
					<div class="ss">
						<span  v-for="(item,index) in title.services" @click="mas(index)" >{{item.name}}</span>
						<p v-for="item in title.services" v-if="show">{{item.description}}</p>
					</div>
					
				</li>
			</ul>
		</div>
		
	</div>
</template>



<script>
	import router from '../../../router'
	import Vue from 'vue'
	import axios from 'axios'
	//http://m.maizuo.com/v4/api/cinema/2791?__t=1499217085166
	
	
	export default{
		data(){
			return{
				title:null,
				show:false,
				
			}
		},
		methods:{
			goBack(){
				router.go(-1);
			},
			mas(index){
				if(this.show == true){
					this.show = false;
				}
			}
			
		},
		created(){
			var timestamp = Date.parse(new Date());
			this.id = this.$route.query.id;
			axios.get(`api/cinema/${this.id}?__t=${timestamp}`)
				.then((response) => {
					//console.log(response);
					this.title = response.data.data.cinema;
					console.log(this.title);
				})
				.catch((error) => {
					console.log(error);
				})
		}
	}
</script>
	
<style>
	#shos{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 30;
	}
	.heaa{
		width: 100%;
		height: 44px;
		background: #000000;
		position: fixed;
		top: 0;
		left: 0;
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
	.content5{
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 30;
		position: absolute;
		top: 44px;
		overflow: auto;
	}
	.content5 img{
		width: 100%;
		height: 200px;
	}
	.lefts{
		width: 20%;
	    height: 100%;
	    text-align: center;
	    float: left;
	}
	.lefts li{
		width: 100%;
		height: 85px;
	}
	.lefts li i{
		font-size: 25px;
		line-height: 100px;
		color: #0077DD;
	}
	.rights {
		width: 80%;
		height: 100%;
		float: left;
		position: relative;
	}
	.rights li{
		width: 100%;
		height: 70px;
		border-bottom: 1px solid #ccc;
		
	}
	.rights li span{
		font-size: 16px;
    display: block;
    margin-top: 17px;
    margin-bottom: 10px;
		
	}
	.rights li a{
		color: #fff;
	    background-color: orange;
	    border: 1px solid #ff8032;
	    width: 94px;
	    border-radius: 38px;
	    height: 34px;
	    border: none;
	    font-size: 13px;
	    position: absolute;
	    right: 10px;
	    text-align: center;
	    line-height: 34px;
	    
   		
	}
	.rights li:nth-child(1) a{
		top: 10px;
	}
	.rights li:nth-child(2) a{
		top: 115px;
	}
	.rights li:nth-child(3) a{
		top: 195px;
	}
	
	.rights li P{
		font-size: 10px;
		color: #ccc;
	}
	.dibu{
		position: absolute;
		left: 0;
		bottom: -80px;
		width: 100%;
	}
	.dibu li {
		width: 100%;
		text-align: center;
	}
	.dibu li div{
		margin-left: 20px;
	}
	.dibu li div i{
		width: 40px;
	    height: 40px;
	    border: 1px solid #ccc;
	    display: inline-block;
	    font-size: 24px;
	    text-align: center;
	    line-height: 40px;
	    margin: 10px;
	    border-radius: 50%;
	}
	.dibu .ss span{
		font-size: 14px;
		margin: 15px;
    	padding-left: 5px;
    	padding-right: 5px;
	}
	.ss{
		border-bottom: 1px solid #ccc;
	}
	.dibu .ss p{
		position: absolute;
	    top: 110px;
	    font-size: 12px;
	    width: 90%;
	    height: 100px;
	   
	    background: #fff;
	}
</style>
