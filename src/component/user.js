import React,{ Component } from 'react';
import Header from './pc_header';
import Footer from './pc_footer';
import {Link,browserHistory} from 'react-router';
import { Tabs,Card,Icon,Row,Col,List ,message,Modal,Form,Input,Button} from 'antd';
const TabPane = Tabs.TabPane;
import {setStore,getStore} from '../common/localStore';
import MediaQuery from 'react-responsive';

export default class User extends Component {
	constructor () {
		super();
		this.state = {
			collections:'',
			comments:'',
		};
	}
	componentWillMount () {
		var myFetchOptions = {
			method: 'GET'
		};
		let userId =  JSON.parse(getStore('UserInfo')).userId;
		
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid="
		+ userId, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({collections:json});
		});
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" 
		+ userId,myFetchOptions)
		.then(response => response.json())
		.then(json => this.setState({comments:json}));
	}
	loginOut (e) {
	    setStore("UserInfo",'');
	    browserHistory.push("/");
	    window.location.reload();
	}
	render () {
		const  {comments,collections} = this.state;
		
		const commentsList = comments.length
		? comments.map((comment,i) => {
			let diff = ((new Date()).getTime()) - ((new Date(comment.datetime)).getTime());
			if(diff<1000*60*60*24*2){
				return (<Card key={i} style={{marginTop:'20px'}} title={comment.UserName} extra={<a href="#">{comment.datetime}</a>}>
					{comment.Comments}				
				</Card>)
			}
		}
		)
		: "你还没有评论文章哦！";
		
		const obj = {};
		let arr = [];
		//收藏
		const coList = collections.length
		? (function () {
			let len = collections.length;
			for(let i=0;i<len;i++) {
				if(!obj[collections[i].uniquekey]){
					arr.push(collections[i]);
					obj[collections[i].uniquekey] = 1;
				} 
			}
			return arr;
		})()
		: '你还没有收藏文字哦！';

		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<Header />
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<div class="m_header">
					    <div class="h_left">
						    <Link onClick={()=>this.props.router.go(-1)}>
						    	<Icon type="arrow-left" />
						    </Link>
					    </div>
					    <div class="h_right" onClick={this.loginOut}>
						    退出
					    </div>
				    </div>
				</MediaQuery>
					<Row>
						<Col class="user_box" span={24}>
							<Tabs>
								<TabPane tab="我的评论" key="1">
									{commentsList}
								</TabPane>
								<TabPane tab="我的收藏" key="2">
									<List
								      bordered
								      dataSource={coList}
								      renderItem={item => (<List.Item>
								      	<Link to={`/details/${item.uniquekey}`}>{item.Title}</Link>
								      	</List.Item>)}
								    />
								</TabPane>
							</Tabs>
						</Col>
					</Row>
			</div>
		)
	}
}
