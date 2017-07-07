import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link, Route} from 'react-router-dom'
import api from '../../common/api.js'


require('pubsub-js/src/pubsub.js')


class Header extends Component{
	
	constructor(){
		super();
		this.state = {
				title:'定位',
				icon:"icon-dingwei",
				
		}
	}
	
	render(){
		
		let wrappWidth = 0;
		
		const lis = this.props.hotwords.map((item, index)=>{
			wrappWidth += item.word.length * 12 + 20;
			return (
				<Link to={{
					pathname:'/home/hotkeyword',
					state:{
						word:item.word,
						infos:this.props.infos
					}
				}}>
				<li key={index}>{item.word}</li>
				
				</Link>
				
			)
		});
		const name = "iconfont " +this.state.icon;
		return (
			<header class="header">
				<div class="info">
					
					<span className={name}><Link to='/home/address'>{this.props.address}</Link></span>
					<span class="arrow"></span>
					<span>{this.props.weatherData.temperature+'°'}</span>
					<img src={`${api.imgHost}/ddc1ecdc7f40f06a69f99894c1ab7151png.png`}/>
					<span className="zj">{this.props.weatherData.description}</span>
				</div>
				<Link class="search" to={{
					pathname:'/home/search',
					state:{
						datas: this.props.search,
						infos:this.props.infos
					}
				}}
					>搜索商家、商品</Link>
				<div class="hot-words">
					<ul class="wrap" style={{
						width: wrappWidth+'px'
					}}>
						{ lis }
					</ul>
				</div>
				
				
			</header>
		)
		
	
	}
	
	
	
}

Header.propTypes = {
	address: PropTypes.string,
	weatherData: PropTypes.object,
	hotwords: PropTypes.array
}

export default Header;