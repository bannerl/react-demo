import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import {Card} from 'antd';

export default class articleBlock extends React.Component {
	constructor () {
		super();
		this.state = {
			news:''
		};
	}
	
	componentWillMount () {
		const fetchMthod = {method:"GET"};
		
		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='+this.props.type
		+'&count='+this.props.count,fetchMthod)
		.then(response => response.json() )
		.then(json => this.setState({news:json}));
	}
	
	render () {
		const { news } = this.state;
		console.log(news)
		const newList = news.length
		? news.map((item,i) => (
			<li key={i}>
				<Link to={`details/${item.uniquekey}`} target="_blank">{item.title}</Link>
			</li>
		))
		: "获取数据失败";	
		console.log(newList);
		return (
			<div>
				<Card>
					<ul>{newList}</ul>
				</Card>
			</div>
		)
	}
}
