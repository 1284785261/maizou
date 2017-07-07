import React, {Component} from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './home/page/HomePage.js'
import Discover from './discover/page/DiscoverPage.js'
import Order from './order/page/OrderPage.js'
import Me from './me/page/MePage.js'
import Tabs from './Tabs.js'

//定义主页面的所需要的初始参数
class App extends Component{
	constructor(){
		super();
		this.state = {
			tabsData:[
				{title: '外卖', icon:"icon-eleme", iconOff: 'icon-eleme1', iconOn: 'icon-eleme2', com: Home, path: '/home'},
				{title: '发现', icon:"icon-discover", iconOff: 'icon-discover1', iconOn: 'icon-discover2', com: Discover, path: '/discover'},
				{title: '订单', icon:"icon-order", iconOff: 'icon-order1', iconOn: 'icon-order2', com: Order, path: '/order'},
				{title: '我的', icon:"icon-me", iconOff: 'icon-me1', iconOn: 'icon-me2', com: Me, path: '/me'}
			]
		}
	}
	
	
	//配置主页面tabs的组件
	render(){
		return(
			<Router>
				<div>
					<Route exact path ='/' component={Home}/>
					{
						this.state.tabsData.map((item,index)=>{
							return(
								<Route key={index} exact path={item.path} component={item.com}/>
							)
						})
					}
					<Tabs data={this.state.tabsData}>
				</div>
			</Router>
		)
	}
}


export default App;