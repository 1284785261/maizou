import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import api from '../../common/api.js'
import ReactSwipe from 'react-swipe';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'whatwg-fetch'

require('../../style/hotkeyword.css')
require('pubsub-js/src/pubsub.js')
class Hotkeyword extends Component{
	constructor(){
		super();
		this.state = {
			icon:'icon-jiantoushang',
			inforsmat:null,
			offset:0,
			limit:20,
			icons:"icon-xingxing",
			keyword:null
		}
		
	}
	
	componentWillMount(){
		//热门小词跳转
		const  url =encodeURIComponent(this.props.location.state.word);
		
		fetch(`${api.hostsApi}?offset=${this.state.offset}&limit=${this.state.limit}&keyword=${url}&latitude=${this.props.location.state.infos.latitude}&longitude=${this.props.location.state.infos.longitude}&search_item_type=2&extra[]=activities`)
		.then((response)=>{
			
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({keyword:jsonData[0].restaurant_with_foods});
		})
	}
	
	//请求热门词并渲染界面
	render(){
		console.log(this.state.keyword);
		if(this.state.keyword){
			
		
		return (
			<ReactCSSTransitionGroup
				transitionName={{
					appear:'slideInRight',
					appearActive:'slideInRight',
					leave:'slideOutRight',
					leaveActive:'slideOutRight'
				}}
			transitionAppear = {true}
			transitionAppearTimeout={1000}
			transitionEnter={false}
			transitionLeave={true}
			transitionLeaveTimeout={1000}
			>
			<div id="homes">
				<div className="contentss">
					<div className="title">
						<input type="text" placeholder="请输入商品" value={this.props.location.state.word}/>
						<a className="back4" onClick={this.goBack.bind(this)}>&lt;</a>
					</div>
					<ul className="lists2">
						<li>全部商家
						<span className={name}></span>
						</li>
						<li>智能排序
						<span className={name}></span>
						</li>
						<li>筛选
						<span className={name}></span>
						</li>
					</ul>
				</div>
				<div class="home-wraps">
					<ul class="list-wraps">
					{
						this.state.keyword.map((item, index)=>{
							const hz = item.restaurant.image_path.endsWith('png')? 'png': 'jpeg';
							const imgSrc = `${api.imgHost}/${item.restaurant.image_path}.${hz}`;
							const name = "iconfont "+this.state.icon;
							const names = "iconfont "+this.state.icons;
							const kms = item.restaurant.distance;
							
							if(kms>=1000){
								var homes = (kms/1000).toFixed(2) +'km';
							}
							else{
								var homes = kms + 'm';
							}
							return (
									<li class="list-item" key={index}>
										<img src={imgSrc}/>
										<div className="temp">
											<h4>{item.restaurant.name}</h4>
											<span className={name} id="piao"></span>
											<span className={names} id="xx" ></span>
											<span className={names} id="xx" ></span>
											<span className={names} id="xx" ></span>
											<span className={names} id="xx" ></span>
											<span className={names} id="xx" ></span>
											<span className="temp1">{item.restaurant.rating}</span>
											<span className="temp2">月售{item.restaurant.recent_order_num}单</span>
											<div className="temps">
												<div className="temos1">
													<span>￥{item.restaurant.float_minimum_order_amount}起送/</span>
													<span>{item.restaurant.piecewise_agent_fee.description}/</span>
													<span>{item.restaurant.average_cost}</span>
													
												</div>
												<div className="temos2">
												
													<span>{homes}/</span>
													<span>{item.restaurant.order_lead_time}分钟</span>
												</div>
											</div>
										</div>
									</li>
									
								
							)
						})
						
					}
				</ul>
				<span className="gd">没有更多了哦~</span>
			</div>	
			</div>
			
		
		</ReactCSSTransitionGroup>
		)
	}
		else{
			return <div></div>
		}
		
	}
	
	
	//返回上一页
	goBack(){
		const list = document.getElementById('homes');
		list.className = 'slideOutRight';
		
		setTimeout(()=>{
			this.props.history.goBack();
		},500);
	}
}

export default Hotkeyword;