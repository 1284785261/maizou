import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('pubsub-js/src/pubsub.js')

class Address extends Component{
	
	
	render(){
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
			
			<div id="address">
				
				<header className="headerz">
					<a className="back" onClick={this.goBack.bind(this)}>&lt;</a>
					<p>选择地址</p>
					<input type="text" placeholder="请输入地址" ref= "in" onChange = {this.inputChange.bind(this)}/>
					<span className="gb" onClick={this.gbClick.bind(this)}>X</span>
				</header>
				<div className="bgs">
					<img src="https://github.elemecdn.com/eleme/fe-static/master/media/empty/no-shop.png" />
					<p>没有搜索结果</p>
					<p>换个关键字试试</p>
				</div>
			</div>	
			</ReactCSSTransitionGroup>
		)
	}
	//返回上一页事件
	goBack(){
		const addressEle = document.querySelector('#address');
		addressEle.className = 'slideOutRight';
		
		setTimeout(()=>{
			this.props.history.goBack();
		},500);
	}
	
	
	//监听input
	inputChange(){
		let val = this.refs.in.value;
		const gb = document.querySelector('.gb');
		const bgs = document.querySelector('.bgs');
		if(val){
			gb.style.display="block";
			bgs.style.display="block";
		}
		else{
			gb.style.display="none";
			bgs.style.display="none";
		}
		
	}
	
	//监听并让历史记录是否显示
	gbClick(){
		this.refs.in.value = null;
		const gb = document.querySelector('.gb');
		const bgs = document.querySelector('.bgs');
		gb.style.display="none";
		bgs.style.display="none";
	}
}




export default Address;