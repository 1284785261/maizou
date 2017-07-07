import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import ReactSwipe from 'react-swipe';

import api from '../../common/api.js'

class Banner extends Component{
	constructor(){
		super();
	}
	render(){
		
		let arr = this.props.data.map((item)=>{
			return item;
		});
		let pages = [];
		while (arr.length > 0){
			let newArr = arr.splice(0, 8);
			pages.push(newArr);
		}
		return (
			<div>
			<ReactSwipe key={pages.length} className="banner-wrapper" swipeOptions={{continuous: true}}>
				{
					pages.map((list, i)=>{
						return (
							<ul class="banner-list" key={i}>
								{
									list.map((item, j)=>{
										const hz = item.image_hash.endsWith('png')? 'png': 'jpeg';
										return (
											<Link key={j} to=
											{{
												pathname:`/home/foot/msite/`,
												state:{
													data2:this.props.data2,
													name:item.name
												}
											}}>
												<li class="banner-item" key={j}>
													<img src={`${api.imgHost}/${item.image_hash}.${hz}`}/>
													<span>{item.name}</span>
												</li>
											</Link>
										)
									})
								}
							</ul>
						)
					})
				}
			</ReactSwipe>
				<div>
				</div>
			</div>
		)
	}	
	
	
	
}

export default Banner;