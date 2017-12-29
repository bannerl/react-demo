import React from 'react';

import { Spin, Alert} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import '../css/news_details.scss';

export default class Index extends React.Component {
	constructor () {
		super();
		this.state = {
			details:''
		};
	}
	
	componentDidMount () {
		const fetchMethod = {method:"GET"};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" 
		+ this.props.params.id,fetchMethod)
		.then(response => response.json())
		.then(json => this.setState({details:json}));
	}
	
	render () {	
		const {details}  = this.state;
		const description = details.pagecontent
		? details.pagecontent
		: <div><Spin tip="Loading..."> </Spin></div>;
		
		return (
			<div>
				<PCHeader/>
				<div class="article-wrapper" dangerouslySetInnerHTML={
					{
						__html:description
					}
				}></div>
				<PCFooter/>
			</div>
		)
	}
}


