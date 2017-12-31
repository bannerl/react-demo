import React from 'react';
import { Spin,message,Button,Alert,notification} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import '../css/news_details.scss';
import Comment from './comment';
import {getStore} from '../common/localStore';
import MediaQuery from 'react-responsive';

export default class Index extends React.Component {
	constructor () {
		super();
		this.state = {
			details:'',
		};
	}
	handleCollection () {
		var myFetchOptions = {
			method: 'GET'
		};
		let userInfo = getStore('UserInfo');
		
		if(userInfo){
			let userId = (JSON.parse(userInfo)).userId;
			fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" 
			+ userId + "&uniquekey=" 
			+ this.props.params.id, myFetchOptions)
			.then(response => response.json())
			.then(json => {
				//收藏成功以后进行一下全局的提醒
				notification['success']({message: '消息提醒', description: '收藏此文章成功'});
			});
		} else {
			message.info('您还没有 登录');
		}
	}
	
	componentDidMount () {
		const fetchMethod = {method:"GET"};
		//获取评论列表
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
				<MediaQuery query='(min-device-width: 1224px)'>
					<PCHeader/>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<div class="m_header">
					    <div class="h_middle">
					      	文章详情
					    </div>
				    </div>
				</MediaQuery>
				<div class="article-wrapper" dangerouslySetInnerHTML={
					{
						__html:description
					}
				}></div>
				<div style={{textAlign:'right',paddingRight:'20px'}}>
					<Button type="primary" onClick={this.handleCollection.bind(this)}>收藏</Button>
				</div>
				<Comment uniquekey={this.props.params.id} />
				<PCFooter/>
			</div>
		)
	}
}


