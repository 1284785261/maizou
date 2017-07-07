import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import Home from './home/page/HomePage.js'
import Discover from './discover/page/DiscoverPage.js'
import Order from './order/page/OrderPage.js'
import Me from './me/page/Mepage.js'


class App extends Component{
	
	//初始化定义tabs的组件
	constructor(){
		super();
		this.state ={
			tabsData:[
				{
					title:'外卖',
					icon:"icon-eleme",
					com:Home,
					path:'/home'
				},
				{
					title:'发现',
					icon:"icon-discover",
					com:Discover,
					path:'/discover'
				},
				{
					title:'订单',
					icon:"icon-order",
					com:Order,
					path:'/order'
				},
				{
					title:'我的',
					icon:"icon-me",
					com:Me,
					path:'/me'
				}
			],
			positionInfo:{}
		}
	}
	
	
	//开始请求全局定位
	componentWillMount(){
		//可以用原生的接口运用H5+定位
//		navigator.geolocation.getCurrentPosition(
//			(location)=>{
//				alert('定位成功');
//				let info = {
//					longitude:location.coords.longitude,
//				    latitude:location.coords.latitude
//				}
//				this.setState({positionInfo:info});
//			},
//			(error)=>{
//				alert('定位失败');
//				this.setState({positionInfo:info});
//			}
//		);
		
		let info = {
			longitude:113.832565,
			latitude:22.628536
		}
		this.setState({positionInfo:info});
	}
	
	render(){
		return(
			<Router>
			
				<div>
					<Route exact path="/" render={()=>{
						return(
							<Home positionInfo = {this.state.positionInfo}/>
						)
					}} />
					{
						this.state.tabsData.map((item, index)=>{
							return(
								<Route key={index} path={item.path} component={item.com}/>
							)
						})
					}
					<nav className="tabs">
					{
						this.state.tabsData.map((item, index)=>{
							const name = "iconfont " + item.icon;
							
							return(
								<NavLink key={index} to={{
									pathname: item.path,
									state:{
										positionInfo:this.state.positionInfo
									}
								}} isActive={this.getTabsActive.bind(this, index)}>
									<em className={name}></em>
									<span>{item.title}</span>
								</NavLink>
							)
						})
					}
					</nav>
				</div>
			</Router>
		)
	}
	
	
	getTabsActive(index ,match ,location){
		if(location.pathname == "/" && index ==0){
			return true;
		}
		else if(!match){
			return false;
		}
		else{
			return true;
		}
	}
}


export default App;