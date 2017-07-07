<template>
	<transition name="fade">
		<div class="details">
			<div class="detail1">
				<span class="right-btn" @click="goBack"><</span>
				<span class="namee">{{details.name}}</span>
			</div>
			<img :src="details.cover.origin" class="haib" />
			<div class="sAbout">
				<p>影片简介</p>
				<p>导演：{{details.director}}</p>
				<p>主演：<i v-for="item in details.actors">{{item.name}} | </i></p>
				<p>地区语言：{{details.nation}}({{details.language}})</p>
				<p>类型：{{details.category}}</p>
				<p>上映日期：{{values = details.premiereAt | data }}</p>
				<p>{{details.synopsis}}</p>

				<router-link :to="{path:'/home/film',query:{id:details.id}}">立即购票</router-link>
			</div>
		</div>
	</transition>

</template>

<script>
	import Vue from 'vue'
	import router from '../../../router'
	//import {IndexList,IndexSection} from 'mint-ui';
	import axios from 'axios'

	Vue.filter('data', function(value) {
		var date = new Date(value);
		let y = date.getFullYear();
		let m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
		let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

		var t = y + '-' + m + '-' + d;
		return t;
	})

	export default {
		data() {
			return {
				id: null,
				details: null
			}

		},
		methods: {
			goBack() {
				console.log(router);

				router.go(-1);
			}
		},
		created() {
			this.id = this.$route.query.id;
			//console.log(this.id);
			axios.get(`/api/film/${this.id}`)
				.then((response) => {
					this.details = response.data.data.film;
					console.log(this.details);
				})
				.catch((error) => {
					console.log(error);
				})

		}
	}
</script>

<style>
	.details {
		width: 100%;
		height: 667px;
		z-index: 22;
		position: relative;
		top: 0;
		left: 0;
		background: #e1e1e1;
	}
	
	.detail1 {
		width: 100%;
		height: 44px;
		background: #ccc;
	}
	
	.right-btn {
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
	
	.namee {
		font-size: 16px;
		line-height: 44px;
		margin-left: 40px;
	}
	
	.haib {
		width: 100%;
		height: 180px;
	}
	
	.sAbout {
		width: 100%;
		
	}
	
	.sAbout p {
		margin-left: 20px;
		font-size: 12px;
	}
	
	.sAbout p:nth-child(1) {
		margin: 16px auto;
		border-left: 16px solid RGB(228, 200, 156);
		font-size: 16px;
		padding-left: 4px;
	}
	
	.sAbout p:nth-child(2) {
		height: 18px;
		overflow: hidden;
		margin-bottom: 10px;
		padding-left: 20px;
	}
	
	.sAbout p:nth-child(3) {
		height: 18px;
		overflow: hidden;
		margin-bottom: 10px;
		padding-left: 20px;
	}
	
	.sAbout p:nth-child(3) i {
		font-style: normal;
	}
	
	.sAbout p:nth-child(4) {
		height: 18px;
		overflow: hidden;
		margin-bottom: 10px;
		padding-left: 20px;
	}
	
	.sAbout p:nth-child(5),
	.sAbout p:nth-child(6) {
		height: 18px;
		overflow: hidden;
		margin-bottom: 10px;
		padding-left: 20px;
	}
	
	.sAbout p:nth-child(7) {
		text-overflow: ellipsis;
		
		padding-left: 20px;
		padding-right: 20px;
	}
	
	.sAbout a {
		display: block;
		text-align: center;
		font-size: 14px;
		min-width: 156px;
		width: 80px;
		height: 36px;
		line-height: 36px;
		border: none;
		background-color: #fe8233;
		padding: 0;
		margin: 0;
		border-radius: 18px;
		color: #fff;
		position: absolute;
		right: 30%;
		bottom: 16px;
	}
	
	@keyframes leave {
		from {
			transform: translateX(0px);
		}
		to {
			transform: translateX(400px);
		}
	}
	
	@keyframes enter {
		from {
			transform: translateX(400px);
		}
		to {
			transform: translateX(0px);
		}
	}
	
	.fade-leave-active {
		animation: leave 1s;
	}
	
	.fade-enter-active {
		animation: enter 1s;
	}
</style>