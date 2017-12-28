import React from 'react';
import { Card } from 'antd';
import {Link,Router,Route} from 'react-router';

export default class ArticleImg extends React.Component {
	constructor(){
		super();
		this.state = {
			news:''
		}
	}
	
	componentWillMount () {
		const fetchOptions = {
			method:"GET"
		}
		
		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='
		+ this.props.type + "&count=" + this.props.count,fetchOptions)
		.then( response => response.json() )
		.then( json => this.setState({news:json}));
	}
	
	render () {
		const { news } = this.state;
		const width = (100/this.props.item)+'%';
		
		const item_img = {
			display: "inline-block",
			width:width,
			textAlign:"center",
			boxSizing:'border-box'
		};
		const styleH3 = {
			fontSize: "16px",
			width:this.props.imgWidth+'px',
			overflow:'hidden',
			textOverflow:'ellipsis',
			whiteSpace:'nowrap'
		}
		const styleDesc = {
			fontSize: "16px",
			width:this.props.imgWidth+'px',
			overflow:'hidden',
			textOverflow:'ellipsis',
			whiteSpace:'nowrap',
			textAlign:"left"
		};
		const imgList = news.length>0
		? news.map( (item,i) => (
			<div style={item_img} key={i}>
				<Link to={`details/${item.uniquekey}`} target="_block">
					<img alt="item.title" src={item.thumbnail_pic_s} width={this.props.imgWidth}/>
					<div class="custom-card">
						<h3 style={styleH3}>{item.title}</h3>
						<p style={styleDesc}>{item.author_name}</p>
					</div>
				</Link>
			</div>
		))
		: "没有获取到新闻";
		
		return (
			<div >
				 <Card title={this.props.title} style={{width:this.props.containerWidth}} bordered={false}>
				 	{imgList}
				 </Card>
			</div>
		);
	}
}
