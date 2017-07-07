import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import api from '../../common/api.js'
import ReactSwipe from 'react-swipe';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'whatwg-fetch'

require('../../style/sousuo.css')
class Foot extends Component{
	constructor(){
		super();
		this.state = {
			icon:'icon-jiantoushang',
			inforsmat:null,
			offset:0,
			icons:"icon-xingxing",
			limit:20
		}
		
	}
	//根据输入的搜索关键字获取数据并刷新页面
	componentWillMount(){
		
		fetch(`${api.sousuoApi}?offset=${this.state.offset}&limit=${this.state.limit}&keyword=${this.props.location.state.id}&latitude=${this.props.location.state.infos.latitude}&longitude=${this.props.location.state.infos.longitude}&search_item_type=2&extra[]=activities`)
		.then((response)=>{
			return response.json();
		})
		.then((jsonData)=>{
			this.setState({inforsmat:jsonData[1].restaurant_with_foods});
			
		})
	}
	render(){
		
		const name = "iconfont "+this.state.icon;
		//判断传过来的值是否是否为null
		if(this.state.inforsmat){
			
		
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
					
					<a className="back4" onClick={this.goBack.bind(this)}>&lt;</a>
					<input type="text" placeholder="请输入地址" value={this.props.location.state.id}/>
				</div>
				<div class="home-wraps">
					<ul class="list-wraps">
					{
						this.state.inforsmat.map((item, index)=>{
							const hz = item.restaurant.image_path.endsWith('png')? 'png': 'jpeg';
							const imgSrc = `${api.imgHost}/${item.restaurant.image_path}.${hz}`;
							const name = "iconfont "+this.state.icon;
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
			return  <div> </div>
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

export default Foot;