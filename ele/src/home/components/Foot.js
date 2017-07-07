import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import api from '../../common/api.js'
import ReactSwipe from 'react-swipe';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'whatwg-fetch'
class Foot extends Component{
	constructor(){
		super();
		this.state = {
			icon:'icon-jiantoushang',
			icons:"icon-xingxing",
		}
		
	}
	//渲染banner列表的界面
	render(){
		console.log(this.props.location)
		const name = "iconfont "+this.state.icon;
		const names = "iconfont "+this.state.icons;
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
			<div id="#home">
			<div className="homes">
				<div className="contents">
					<div className="title">
						<h1>{this.props.location.state.name}</h1>
						<a className="back" onClick={this.goBack.bind(this)}>&lt;</a>
					</div>
					<ul className="lists">
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
				<div class="home-wrap">
					<ul class="list-wrap2">
					{
						this.props.location.state.data2.map((item, index)=>{
							const hz = item.image_path.endsWith('png')? 'png': 'jpeg';
							const imgSrc = `${api.imgHost}/${item.image_path}.${hz}`;
							const name = "iconfont "+this.state.icon;
							const kms = item.distance;
							
							if(kms>=1000){
								var homes = (kms/1000).toFixed(2) +'km';
							}
							else{
								var homes = kms + 'm';
							}
							return (
								<Link id="ljs" to={{
									pathname:`/home/details/${item.id}`,
									state:{
										infos:this.props.infos
									}
								}} >
									<li class="list-item" key={index}>
										<img src={imgSrc}/>
										<div className="temp">
											<h4>{item.name}</h4>
											<span className={name} id="piao"></span>
											<span className={names} id="xx" ></span>
											<span className={names} id="xx" ></span>
											<span className={names} id="xx" ></span>
											<span className={names} id="xx" ></span>
											<span className={names} id="xx" ></span>
											<span className="temp1">{item.rating}</span>
											<span className="temp2">月售{item.recent_order_num}单</span>
											<div className="temps">
												<div className="temos1">
													<span>￥{item.float_minimum_order_amount}起送/</span>
													<span>{item.piecewise_agent_fee.description}/</span>
													<span>{item.average_cost}</span>
													
												</div>
												<div className="temos2">
												
													<span>{homes}/</span>
													<span>{item.order_lead_time}分钟</span>
												</div>
											</div>
										</div>
									</li>
								</Link>	
							
							)
						})
						
					}
				</ul>
				<span className="gd">没有更多了哦~</span>
			</div>	
			</div>
			</div>
		</ReactCSSTransitionGroup>
		)
		
	}
	
	//返回上一页
	goBack(){
		const list = document.querySelector('.homes');
		list.className = 'slideOutRight';
		
		setTimeout(()=>{
			this.props.history.goBack();
		},500);
	}
}

export default Foot;