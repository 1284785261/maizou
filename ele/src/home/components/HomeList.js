import React, {Component} from 'react'
import {Link,Route} from 'react-router-dom'
import api from '../../common/api.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Cosplay from '../components/Cosplay.js'

require('pubsub-js/src/pubsub.js')
class List extends Component{
	constructor(){
		super();
		this.state = {
				title:'票',
				icon:"icon-piao",//定义icon字体
				icons:"icon-xingxing",
				infos:{
					
				}		//获取经纬度的传值
		}
	}
	render(){
		
		return (
		
			<div class="list">
				<h3 class="title">推荐商家</h3>
				<ul class="list-wrap">
					{
						this.props.data.map((item, index)=>{
							const hz = item.image_path.endsWith('png')? 'png': 'jpeg';
							const imgSrc = `${api.imgHost}/${item.image_path}.${hz}`;
							const name = "iconfont "+this.state.icon;
							const names = "iconfont "+this.state.icons;
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
				<Route exact path="/home/details/cosplay/:id/" component={Cosplay}/>
			</div>
			
		)
		
	}
	
	componentDidMount(){
		
		this.props.refresh();
		this.setState({infos:this.props.infos});
		
	}
	
	componentDidUpdate(){
		this.props.refresh();
	}
	
	
	
}

export default List;