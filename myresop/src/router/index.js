import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/config/Home/Home.vue'
import Address from '@/components/config/Home/Address.vue'
import Discover from '@/components/config/discover/Discover.vue'
import Order from '@/components/config/order/Order.vue'
import Me from '@/components/config/me/Me.vue'
import Shop from '@/components/config/shop/Shop.vue'
import Collect2 from '@/components/config/Home/Collect2.vue'
import Collect3 from '@/components/config/Home/Collect3.vue'
import Details from '@/components/config/Home/Details.vue'
import Film from '@/components/config/discover/Film.vue'
import Shos from '@/components/config/discover/Shos.vue'
import Dessit from '@/components/config/order/Dessit.vue'
import Banner from '@/components/config/shop/Banner.vue'
import Banner2 from '@/components/config/shop/Banner2.vue'
import Dess from '@/components/config/shop/Dess.vue'
import Denglu from '@/components/config/me/Denglu.vue'
import Zhuce from '@/components/config/me/Zhuce.vue'
import Mima from '@/components/config/me/Mima.vue'
import Xiadan from '@/components/config/order/Xiadan.vue'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			component: Home
		},
		{
			path: '/home',
			component: Home,
			children: [
				{
					path: 'address',
					component: Address
				},

				{
					path: 'collect2',
					component: Collect2,
					children: [
						{
							path: 'details',
							component: Details
						}
					]
				},
				{
					path: 'collect3',
					component: Collect3
				},
				{
					path: 'details',
					component: Details
				},
				{
					path: 'film',
					component: Film
				}
			]
		},
		{
			path: '/discover',
			component: Discover
		},
		{
			path:'/discover/shos',
			component:Shos			
		},
		{
			path: '/order',
			component:Order,	
		},
		{
			path:'/order/dessit',
			component:Dessit
		},
		{
			path:'/order/dessit/xiadan',
			component:Xiadan
		},
		{
			path: '/shop',
			component: Shop
		},
		{
			path: '/shop/banner',
			component: Banner
		},
		{
			path: '/shop/banner2',
			component: Banner2
		},
		{
			path: '/shop/dess',
			component: Dess
		},
		{
			path: '/shop/banner/dess',
			component: Dess
		},
		{
			path: '/shop/banner2/dess',
			component: Dess
		},
		{
			path: '/me',
			component: Me
		},
		{
			path: '/me/denglu',
			component: Denglu
		},
		{
			path: '/me/denglu/zhuce',
			component: Zhuce
		},
		{
			path: '/me/denglu/mima',
			component: Mima
		},
		{
			path: '/*',
			component: Home
		}
	]
})