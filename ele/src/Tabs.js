import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'


//接收从app1传递过来的参数
class Tabs extends Component{
	render(){
		return(
			<nav>
				{
					this.props.data.map((item,index)=>{
						//定义图标
						const name = "iconfont" +item.icon;
						
						//返回dom结构
						return(
							<NavLink key={index} to={item.path} isAactive={this.getTabsAcivet.bind(this, index)}>
								<em className={name}></em>
								<span>item.title</span>
							</NavLink>
						)
					})
				}
			</nav>
		)
	}
	
	//判断开始选中的样式
	getTabsAcivet(index,match,location){
		if(location.pathname == '/' && index == 0){
			return true;
		}
		else if(!match){
			return false;
		}
		else{
			return true;
		}
	}
}


export default Tabs;