import React, {Component} from 'react'


import api from '../../common/api.js'

require('pubsub-js/src/pubsub.js')

class Commodity extends Component{
	constructor(){
 		super();
 		this.state = {
 			
 			values:null
 		}
 }
	
	//渲染详细列表组件
	render(){
	let obj = this.props.data;//接收从details传过来的值
	console.log(obj);
	const hz = obj[0].icon_url.endsWith('png')? 'png': 'jpeg';
	if(obj){
		
	
		return (
			
			<div id="commodity">
			
				<div className="contentshop">
					<div className="lefts">
						<ul>
						{
							obj.map((item,index)=>{
								return(
									<li  key={index}>
									<span>{item.name}</span>
									</li>
								)
							})
						}	
						</ul>
					</div>
					
					
						
					
			
			
				<div className="tight">
				{		
						
						obj.map((item,index)=>{
						return(
							<dl className="rights">	
									<dt className="p1">
											<i>{item.name}</i>
											{item.description}
											<span>...</span>
									</dt>
								{	
									item.foods.map((item, index)=>{
										return(	
											<dd className="p2" key={index}>
											<img src={`${api.imgHost}/${item.image_path}.${hz}`} />
											
												<div>
													<h1>{item.name}</h1>
													<p>{item.description}</p>
													<span>月售{item.month_sales}</span>
													<span>好评率100%</span>
													
													<p className="pices">${item.specfoods[0].price}</p>
													<span className="jian">-</span>
													<span className="number">1</span>
													<span className="jia">+</span>
												</div>
											</dd>
										)
									})
							
								}
							</dl>
						)
						})
				}	
				</div>
			
			
					
				</div>
			
			</div>
		)
	}
		else{
			return <div></div>
		}
	}
	
	
	
}

export default Commodity;