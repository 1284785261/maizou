import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'


import Sousuo from './Sousuo.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('pubsub-js/src/pubsub.js')
class Search extends Component{
	constructor(){
		super();
		this.state = {
			val:null,
			icon:'icon-dingdan',
			datas:{},//得到上个页面传过来的数据
			cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[]//从localstorage获取历史记录的cart
			
		}
		
	}
	componentWillMount(){
		let positionInfo = this.props.positionInfo;
		if(positionInfo == undefined){
			positionInfo = this.props.location.state.positionInfo;
		}
		
			this.setState({datas:this.props.location.state.datas});
		
		
	}
	
	//热门搜索
	render(){
		
			const name = 'iconfont '+this.state.icon;
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
				transitionLeaveTimeout={1000}
				>
				
				<div id="address2">
						
						<header className="headerz2">
						
							<a className="back1" onClick={this.goBack.bind(this)}>&lt;</a>
							<input type="text" placeholder="请输入商品名称" ref= "in" onChange = {this.inputChange.bind(this)}/>
							<span className="gb2" onClick={this.gbClick.bind(this)}>X</span>
							
							<Link className="sousuo" onClick= {this.lsActive.bind(this)} to={{
								pathname:'/home/search/sousuo',
								state:{
									id:this.state.val,
									infos:this.props.location.state.infos
								}
							}} >搜索</Link>
							
						
						</header>
						<div id="lishi">
								<p>历史搜索</p>
								
								<span className={name} id="del" onClick={this.delActive.bind(this)}></span>
								<ul className="reacs">
									{
									
										this.state.cart.map((item,index)=>{
											return <li key={index}><span>{item}</span></li>
										})
									}
							</ul>
						</div>
						<div id="remen">
							<p>热门搜索</p>
							<ul className="reacs">
									{
									
										this.state.datas.map((item,index)=>{
											return <li key={index}><span>{item.word}</span></li>
										})
									}
							</ul>
						</div>
						
				</div>	
				<Route path="/home/search/sousuo" component={Sousuo}/>
				</ReactCSSTransitionGroup>
			)
	
	}
	//返回上一页事件
	goBack(){
		const address2 = document.querySelector('#address2');
		address2.className = 'slideOutRight';
		setTimeout(()=>{
			this.props.history.goBack();
		},500);
	}
	
	//监听input
	inputChange(){
		let val = this.refs.in.value;
		const gb = document.querySelector('.gb2');
		const bgs = document.querySelector('.bgs');
		if(val){
			gb.style.display="block";
				this.setState({val:val});
		}
		else{
			gb.style.display="none";
			
		}
		
	}
	
	//生成历史记录
	lsActive(){
		    let val = this.refs.in.value;
			let arr = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[];
			let isExist = false;
			arr.map((item,index)=>{
						if(item == val){
							isExist=true;	
						}
					
				});
			if(!isExist){
				var lishi = document.getElementById('lishi');
				lishi.style.display="block";
				arr.push(val);
			}
			localStorage.setItem("cart", JSON.stringify(arr));
	}
	
	
	//删除历史记录
	delActive(){
		localStorage.removeItem("cart");
		var lishi = document.getElementById('lishi');
		lishi.style.display="none";
	}
	
	//返回
	gbClick(){
		this.refs.in.value = null;
		const gb = document.querySelector('.gb2');
		const bgs = document.querySelector('.bgs');
		gb.style.display="none";
		
	}
}


export default Search;