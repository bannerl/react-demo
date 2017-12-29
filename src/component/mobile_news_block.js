import React,{ Component } from 'react';
import {Icon,List, Avatar,Card} from 'antd';
import {Link} from 'react-router';
import '../component_css/mobile_list.scss';

export default class MobileNewsBlock extends React.Component {
	constructor () {
		super();
		this.state = {
			news:''
		};
		
		
	}
	
	componentWillMount () {
		var fetchMethod = {method:"GET"};
		
		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='+this.props.type
		+'&count='+this.props.count,fetchMethod)
		.then(response => response.json())
		.then(json => this.setState({news:json}))
	}
	
	render () {
		const {news} = this.state;
		const newsList = news.length
		? news.map((item,i)=>{
			return <Link to={`details/${item.uniquekey}`} key={i}>
			<li class='item' >
				<div class='itemLeft'>
					<img src={item.thumbnail_pic_s} alt="thumbimage" />
				</div>
				<div class='itemRight'>
					<h4>{item.title}</h4>
					<div class='other'>
						<span class='type'>{item.realtype}</span>
						<span class='net'>{item.author_name}</span>
						<span class='date'>{item.date}</span>
					</div>
				</div>
			</li>
			</Link>
		})
		: "正在努力加载中！"
		
		return (
			<div>
				<Card class='card' title={this.props.title}>
					<ul class='box'>
						{newsList}
					</ul>
				</Card>
			</div>
		)
	}
}
