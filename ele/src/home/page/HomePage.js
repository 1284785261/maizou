import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import Header from '../components/HomeHeader.js'
import Banner from '../components/HomeBanner.js'
import List from '../components/HomeList.js'
import Hotkeyword from '../components/Hotkeyword.js'
import Address from '../components/Address.js'
import Search from '../components/Search.js'
import Details from '../components/Details.js'
import Foot from '../components/Foot.js'


import api from '../../common/api.js'
import 'whatwg-fetch'

import '../../style/home.css'

class Home extends Component{
	constructor(){
		super();
		this.state = {
			weatherData: {},
			address: '',
			hotwords: [],
			bannerData: [],
			offset: 0,
			limit: 20,
			listData: [],
			homeScroll: null,
			fetchId:0,
			search:[],
			infos:{
				
			},
			bannerlist:[],
			icon:'icon-huidaodingbu'
		}
	}
	
	componentWillMount(){
		
		let positionInfo = this.props.positionInfo;
		if(positionInfo == undefined){
			positionInfo = this.props.location.state.positionInfo;
		}
		let {longitude: l, latitude: t} = positionInfo;
		
		this.setState({infos:{longitude: l, latitude: t} });
		
		//请求天气数据
		fetch(`${api.weatherApi}?longitude=${l}&latitude=${t}`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({weatherData: jsonData, fetchId:1});
		})
		
		//请求地址信息
		fetch(`${api.geoApi}?longitude=${l}&latitude=${t}`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({address: jsonData.address, fetchId:2});
		})
		
		//请求热门词汇
		fetch(`${api.hotwordsApi}?longitude=${l}&latitude=${t}`)
		.then((response)=>{
			
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({hotwords: jsonData, fetchId:3});
		})
		
		//请求轮播图数据
		fetch(`${api.bannerApi}?longitude=${l}&latitude=${t}&templates[]=main_template`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({bannerData: jsonData[0].entries, fetchId:4});
		})
		
		//请求轮播图列表数据
		fetch(`${api.bannerlistApi}?longitude=${l}&latitude=${t}&keyword=&offset=0`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({bannerlist: jsonData, fetchID:5});
		})
		
		//请求列表数据
		fetch(`${api.listApi}?longitude=${l}&latitude=${t}&offset=${this.state.offset}&limit=${this.state.limit}`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			
			this.setState({listData: jsonData, fetchId:6});
		});
		
		
		//请求热门词汇数据
		fetch(`${api.searchApi}?&latitude=${t}&longitude=${l}`)
		.then((response)=>{
			
			return response.json();
		})
		.then((jsonData)=>{
			
			this.setState({search:jsonData, fetchId:7});
			
		});
		
		
		
	}
	
	componentDidMount(){
		const homeEle = this.refs.home;
//		console.log(homeEle)

		const homeScroll = new IScroll(homeEle, {
			
		});
		this.setState({homeScroll: homeScroll});
	}
	
	render(){
		const name = "iconfont "+this.state.icon;
		return (
			<div>
				<div ref="home" id="home">
					<div class="home-wrap">
					{/*传送数据给header父组件*/}
						<Header {...{
							weatherData: this.state.weatherData,
							address: this.state.address,
							hotwords: this.state.hotwords,
							search: this.state.search,
							infos:this.state.infos
						}}/>
						<Banner data={this.state.bannerData} fId={this.state.fetchId} data2={this.state.bannerlist}/>
						<List refresh={this.scrollRefresh.bind(this)} data={this.state.listData} 
						infos={this.state.infos}/>
					</div>
					
				</div>
				<div className={name} id="fd" ></div>
				<Route path="/home/address" component={Address}/>
				<Route path="/home/search" component={Search}/>
				<Route path="/home/details/:id"  component={Details}/>
				<Route path="/home/foot/msite/" component={Foot}/>
				<Route path="/home/hotkeyword" component={Hotkeyword}/>
				
			</div>
			
		)
		
	}
	
	
	
	
	scrollRefresh(){
		if(this.state.homeScroll){
			this.state.homeScroll.refresh();
			
		}
		
	}
	
	
}

export default Home;
