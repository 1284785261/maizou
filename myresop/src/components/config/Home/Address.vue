<template>
	<transition name="slide">
		<div id="address">
			<div>
				<header class="header">
					<span class="right-btn" @click="goBack"><</span><span class="name2">城市选择</span>
					<h1 class="title">定位</h1>
				</header>
				<div class="content">
					
					<div class="left">
						<dl>
							<dt><span>GPS定位你所在的城市</span></dt>
							<dd><span>深圳</span></dd>
						</dl>
						<dl>
							<dt><span>热门城市</span></dt>
							<dd><span>深圳</span></dd>
							<dd><span>广州</span></dd>
							<dd><span>上海</span></dd>
							<dd><span>北京</span></dd>
						</dl>
						<dl v-for="item in list1">
							<dt v-for="its in this.lus">{{its}}</dt>
							<dd><span>{{item.name}}</span></dd>
						</dl>
					</div>
					<div class="right">
						
						<ul>
							<li v-for="item in lus2">{{item}}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import Vue from 'vue'
import router from '../../../router'
import {IndexList,IndexSection} from 'mint-ui';
import axios from 'axios'

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
	data(){
		return{
			lus2:['A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    lus:[{'A':[]},{'B':[]},{'C':[]},{'D':[]},{'E':[]},{'F':[]},{'G':[]},{'H':[]},{'I':[]},{'J':[]},
    {'K':[]},{'L':[]},{'M':[]},{'N':[]},{'O':[]},{'P':[]},{'Q':[]},{'R':[]},{'S':[]},{'T':[]},{'U':[]},{'V':[]},{'W':[]},{'X':[]},{'Y':[]},{'Z':[]}],
    		list1:{}
		}
	},
	methods: {
		goBack(){
			console.log(router);
			router.go(-1);
		}
	},
	created(){
		var timestamp = Date.parse(new Date());
		//console.log(timestamp);
		axios.get(`/api/city?__t=${timestamp}`)
			.then((response)=>{
				
				this.list1 = response.data.data.cities;
				this.list1.map((item)=>{
					this.lus.map((key,value)=>{
						console.log(key);
						if(item.pinyin.substr(0,1) == this[key]){
							//console.log(item.name);
							this.key.push(1);
						}
						//if(item.pinyin.substr(49))
					})
				})
				console.log(this.lus);
			})
			.catch((error)=>{
				console.log(error);
			})
	}
}
	
</script>

<style>
#address{
	width: 100%;
	height: 100%;
	
}
.right-btn{
	width: 50px;
	height: 34px;
	position: absolute;
	top: 5px;
	color: #0077DD;
	text-align: center;
	line-height: 34px;
	left: -5px;
    font-size: 25px;
}
.name2{
	font-size: 16px;
    line-height: 44px;
    margin-left: 40px;
}
#address div .content{
	height: 623px;
	bottom: 0;
	z-index: 11;
	overflow: hidden;
	background: darkgoldenrod;
}
.content .left{
	width: 90%;
	height: 625px;
	background: #fff;
	float: left;	
	overflow: auto;
}
.content .left dl{
	width: 100%;
}
.content .left dl dt{
	width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #ebebeb;
    
   
}
.content .left span{
	margin-left: 20px;
}
.content .left dl dd{
	width: 100%;
	height: 50px;
	line-height: 50px;
	font-size: 16px;
	
	position: relative;
}
.content .left dl dd:before{
	content: '';
	transform: scaleY(0.5);
	width: 94%;
    height: 1px;
    position: absolute;
    left: 20px;
    bottom: -1px;
    border-bottom: 1px solid #0F0F0F;
}
.content .right{
	width: 10%;
	height: 100%;
	z-index: 12;
	float: left;
	background: #0077DD;	
}
.right ul li {
	width: 100%;
    text-align: center;
    height: 24px;
    color: white;
    
}
@keyframes slide-enter{
	from{
		transform: translateX(100%);
	}
	to{
		transform: translateX(0%);
	}
}
@keyframes slide-leave{
	from{
		transform: translateX(0%);
	}
	to{
		transform: translateX(100%);
	}
}
.slide-enter-active{
	animation: slide-enter 400ms ease-in;
}
.slide-leave-active {
  animation: slide-leave 400ms ease-in;
}

</style>