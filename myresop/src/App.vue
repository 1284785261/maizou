<template>
  <div id="app">
    <router-view></router-view>
    
    <nav class="tabs">
    	<router-link v-for="tab in tabs" :to="tab.path"><i :class="tab.icon" id="active2"></i>{{tab.title}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		tabs:[
  			{title: '电影', path: '/home', icon: 'iconfont icon-zhiliangrenzheng'},
				{title: '影院', path: '/discover', icon: 'iconfont icon-carddiscounts'},
				{title: '演出', path: '/order', icon: 'iconfont icon-translation'},
				{title: '商城', path: '/shop', icon: 'iconfont icon-shop_fill'},
				{title: '我的', path: '/me', icon: 'iconfont icon-operatorcallc'}
				
  		]
  	}
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
html, body ,#app{
	width:100%;
	height: 100%;
}
a{
	text-decoration: none;
}
ul,li{
	list-style: none;
}


.tabs{
	width: 100%;
	height: 49px;
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	background: #fff;
	z-index: 21;
}
.tabs:before{
	content: '';
	display: block;
	width: 100%;
	height: 1px;
	border-top: 1px solid #000;
	position: absolute;
	left: 0;
	top: -1px;
	transform: scaleY(0.5);
	z-index: 10;
	background: #fff;
}
.tabs a{
	
	flex: 1;
	text-align: center;
	background: #fff;
	color: #000;
	font-size: 12px;
}
.tabs a.router-link-active{
	color: orange;
}
.tabs a i{
	color: #000;
	background: #fff;
	padding-top: 4px;
	font-size: 25px;
	display: block;
}
#active2{
	color: orange;
}
#app .header{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 44px;
	background: #fff;
}
#app .header .title{
	width: 100%;
	height: 44px;
	line-height: 44px;
	text-align: center;
	font-size: 24px;
	color: #fff;
}
.left-btn{
	width: 50px;
	height: 34px;
	position: absolute;
	top: 5px;
	color: black;
	font-size: 12px;
	text-align: center;
	line-height: 34px;
	right: 10px;
}
.left-btn i{
	position: absolute;
	top: 0;
	color: #0077DD;
	right: -3px;
}
.logo{
	display: inline-block;
	width: 100px;
	height: 44px;
	background: url(img/3.png) no-repeat 10px top;
	background-size: 30px 40px;
}
.logo1{
	display: inline-block;
    height: 44px;
    width: 64px;
    color: #fff; 
    line-height: 24px;
    background: url(img/4.png) no-repeat center;
    font-size: 10px;
    position: absolute;
    left: 44px;
    top: 5px;
    padding-left: 5px;
   	
}
#app .content{
	width: 100%;
	position: absolute;
	top: 44px;
	bottom: 49px;
	background: #fff;
	z-index: 5;
}



</style>
