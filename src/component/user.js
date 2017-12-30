import React,{ Component } from 'react';
import Header from './pc_header';
import Footer from './pc_footer';
import { Tabs,Card,Icon,Row,Col,message,Modal,Form,Input,Button} from 'antd';
const TabPane = Tabs.TabPane;
import {setStore,getStore} from '../common/localStore';

export default class User extends Component {
	constructor () {
		super();
		this.state = {
			collections:'',
			comments:''
		};
	}
	componentWillMount () {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid="
		+ this.props.params.userid, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({collections:json});
		});
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" 
		+ this.props.params.userid,myFetchOptions)
		.then(response => response.json())
		.then(json => this.setState({comments:json}));
	}
	
	render () {
		const  {comments,collections} = this.state;
		
		const commentsList = comments.length
		? comments.map((comment,i) => {
			let diff = ((new Date()).getTime()) - ((new Date(comment.datetime)).getTime());
			console.log((new Date()).getTime())
			if(diff<1000*60*60*24*10){
				return (<Card key={i} style={{marginTop:'20px'}} title={comment.UserName} extra={<a href="#">{comment.datetime}</a>}>
					{comment.Comments}				
				</Card>)
			}
		}
		)
		: "你还没有评论文章哦！";
		
		return (
			<div>
				<Header/>
					<Row>
						<Col span={24}>
							<Tabs>
								<TabPane tab="我的收藏" key="1">
									{commentsList}
								</TabPane>
								<TabPane tab="我的评论" key="2">
								2
								</TabPane>
							</Tabs>
						</Col>
					</Row>
				<Footer/>
			</div>
		)
	}
}
