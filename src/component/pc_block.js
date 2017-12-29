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
		const fetchMethod = {method:"GET"};
		
		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='+this.props.type
		+'&count='+this.props.count,fetchMethod)
		.then(response => response.json() )
		.then(json => this.setState({news:json}));
	}
	
	render () {
		const { news } = this.state;
		const styles = {
			overflow: "hidden",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			width:this.props.width,
			display: "block"
		};
		const newList = news.length
		? news.map((item,i) => (
			<li key={i}>
				<Link style={styles} to={`details/${item.uniquekey}`} target="_blank">{item.title}</Link>
			</li>
		))
		: "没有获取到新闻";	
		return (
			<div>
				<Card>
					<ul>{newList}</ul>
				</Card>
			</div>
		)
	}
}
