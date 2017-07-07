<template>
	
	
	<div id="xiadan">
		<div class="heaa">
			<i class="iconfont" @click="goBack">&#xe607;</i>
			<span>卖座·HOPPA演出</span>
		</div>
		<div class="com">
			<span>详情</span><span>下单</span><span>支付</span>
		</div>
		<div class="xq">
			<p>时间:</p>
			<span v-for="its in this.desit.options[0].item" class="activm">{{its}}</span>
			<p>票档:</p>
			<span v-for="(is,index) in this.desit.skuList" :class="{'activm':i==index}" >
				<div @click="tbs(index)">
					<i ref="ms">{{is.price/100}}</i>{{is.options[1].value}}
				</div>
			</span>
			<div class="ssa">
			<p class="sl" v-model="num">数量</p>
			<button @click="jia">+</button>
			<span class="nus">{{this.num}}</span>
			<button @click="jian">-</button>
			</div>
		</div>
		<div class="imgs2"><span>待付金额:<i>{{this.number}}元</i></span>
			<a class="xd2" @click="xds">立即下单</a>
		</div>
		
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
				i:null,
				num:1,
				number:null,
				price:null
				
			}
		},
		computed:{
			number:function(){
				return this.price * this.num;
			}
			
		},
		methods:{
			goBack(){
				router.go(-1);
			},
			tbs(index){
				this.i=index;
				console.log(index);
				this.price = this.desit.skuList[index].price/100;
				this.number = this.price * this.num;
//				 return this.number = (this.desit.skuList[index].price/100) * this.num;
				
			},
			jia(){
				this.num+=1;
				this.number = this.price * this.num;
				console.log(this.number);
			},
			jian(){
				this.num-=1;
				if(this.num<1){
					this.num=1;
					
				}
				this.number = this.price * this.num;
				
				
			},
			xds(){
				
				this.$router.push({path:'/me/denglu'});
				
			}
		},
		
		created(){
		//获取数据
			var timestamp = Date.parse(new Date());
			this.id = this.$route.query.id;
			axios.get(`/schedule/${this.id}?__t=${timestamp}`)
					.then((response)=>{
						
						this.desit=response.data.data;
						console.log(this.desit);
					})
					.catch((error)=>{
						console.log(error);
					})
			
		},
		beforeMount(){
			
		
			
		}
	}
</script>

<style>
	#xiadan{
		width: 100%;
		height: 500px;
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
		height: 50px;
		border-bottom: 4px solid #ccc ;
		background: #fff;
		text-align: center;
		
	}
	.com span{
		margin-top: 30px;
	    padding: 15px;
	    line-height: 4px;
	    border-bottom: 1px solid #ccc;
	}
	.xq{
		width: 100%;
		
		position: absolute;
		top: 110px;
		left: 0;
	}
	.xq p{
		margin-left: 20px;
	}
	.xq span{
		display: inline-block;
	    box-sizing: border-box;
	    text-align: center;
	    width: 100px;
	    height: 50px;
	    border: 1px solid rgba(0, 0, 0, 0.54);
	    border-radius: 4px;
	    margin-right: 10px;
	    margin-top: 10px;
	    margin-left: 10px;
	    color: rgba(0, 0, 0, 0.54);
	    margin-bottom: 10px;
	}
	.xq .activm{
		border: 1px solid orange;
		color: orange;
	}
	.xq span i{
		font-style: normal;
		display: block;
	}
	.imgs2{
		width: 100%;
		height: 49px;
		position: absolute;
		left: 0;
		bottom: 0;
		background: #fff;
		z-index: 30;
		
	}
	.imgs2 span{
		line-height: 49px;
		font-size: 20px;
	}
	.imgs2 span i{
		font-style: normal;
		margin-left: 10px;
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
	.xd2{
		width: 140px;
		height: 49px;
		position: fixed;
		right: 0;
		bottom: 0;
		background: #ff5000;
		text-align: center;
		display: block;
		line-height: 49px;
		z-index: 25;
		font-size: 20px;
		color: white;
	}
	.xq button{
		width: 30px;
		height: 30px;
		border: none;
		border: 1px solid orange;
		font-size: 20px;
		color: orange;
		background: #fff;
		float: right;
		margin-top: 20px;
		margin-left: 50px;
	}
	.xq .nus{
		width: 15px;
		border: none;
		font-size: 20px;
		line-height: 30px;
		float: right;
		position: absolute;
		right: 37px;
   		top: 260px;
	}
	.sl{
		float: left;
		margin-top: 20px;
	}
</style>