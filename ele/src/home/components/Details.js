import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link, Route} from 'react-router-dom'

import api from '../../common/api.js'
import Commodity from './Commodity.js'
require('pubsub-js/src/pubsub.js')


export default class Details extends Component{
 	constructor(){
 		super();
 		this.state = {
 			icon:'icon-dingdan',
 			id:null,
 			information:null,
 			listw:null,
 			infos:{
 				
 			}
 		}
 	}
 	componentWillMount(){
 		
 		this.setState({infos:this.props.location.state.infos});
 		//商品头部数据
 		fetch(`${api.detailApi}/${this.props.match.params.id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&longitude=${this.props.location.state.infos.longitude}&latitude=${this.props.location.state.infos.latitude}`)
 		.then((response)=>{
 			
 			return response.json();
 		})
 		.then((jsonData)=>{
 			
 			this.setState({information:jsonData});
 		});
 		
 		
 		//商品列表数据
 		fetch(`${api.listwApi}?restaurant_id=${this.props.match.params.id}`)
 		.then((response)=>{
 			return response.json();
 		})
 		.then((jsonData)=>{
 			
 			this.setState({listw:jsonData});
 		});
 		
 		//商品详情数据
 		
 		
 	}
	render(){
	  	console.log(this.state.infos);
		const name = "iconfont " +this.state.icon;
		
		if(this.state.information && this.state.listw){
		const hz = this.state.information.image_path.endsWith('png')? 'png': 'jpeg';
		return(
			
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
			>
				<div id="detail">
				{
					
						<div className="content">
								<div className="head">
									<a className="back" onClick={this.goBack.bind(this)}>&lt;</a>								
									<Link className="back2" to={{
										pathname:`/home/details/cosplay/${this.props.match.params.id}/`,
										state:{
											info:this.state.infos,
											id:this.props.match.params.id
										}
									}}>&gt;</Link>
									<dl>
										<dt><img src={`${api.imgHost}/${this.state.information.image_path}.${hz}`} /></dt>
										<dd>
											<p className="name">{this.state.information.name}</p>
											<span>商家配送 /</span>
											<span>{this.state.information.order_lead_time}分钟内送达 /</span>
											<span>{this.state.information.piecewise_agent_fee.description}</span>
											<p className="name2">公告:{this.state.information.promotion_info}</p>
											
										</dd>
									</dl>
									<div className="new">
										<i>新</i>
										<span className="name3">{this.state.information.activities[0].description}</span>
										<span className="name4">3个活动</span>
									</div>
								</div>
								<div>
									<ul className="leibie">
										<li>
										<span className="shp">商品</span>
										</li>
										<li>
										<span>评价</span>
										</li>
									</ul>
									
									<Commodity data={this.state.listw}/>
								
								
									<div className="shopss">
										<span id="dingdan" className={name}></span>
										<span>$0</span>
										<p>{this.state.information.piecewise_agent_fee.description}</p>
										<div className="money">去结算</div>
									</div>
								</div>
						</div>			
					
				}
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
		const detailPage = document.querySelector('#detail');
		detailPage.className = 'slideOutRight';
		setTimeout(()=>{
			this.props.history.goBack();
		},500);
	}
}
 
 