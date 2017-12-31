import React from 'react';
import { Tabs,Card,Icon,Row,Col,message,Modal,Form,Input,Button} from 'antd';
import {getStore} from '../common/localStore';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class Comment extends React.Component {
	constructor () {
		super();
		this.state = {
			comments:''
		}
	}
	
	handlerSubmit () {
		let formData = this.props.form.getFieldsValue();
		const fetchOptions = {method: "GET"};
		let userInfo = getStore('UserInfo');
		
		if(userInfo){
			if(formData.remark){
				let userId = (JSON.parse(userInfo)).userId;
				fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" 
				+ userId + "&uniquekey=" + this.props.uniquekey 
				+ "&commnet=" + formData.remark, fetchOptions)
				.then(response => response.json())
				.then(json => {
					document.getElementsByClassName('textarea')[0].value = '';
					this.componentDidMount();
				});
			} else {
				 message.info('评论内容不能为空');
			}
			
		} else {
			 message.info('请先登录');
		}
	}
	
	componentDidMount () {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({comments: json});
		});
	}
	
	render () {
		const { getFieldProps } = this.props.form;
		const textarea = {
			outline:'none',
			border:'1px solid #ddd',
			display:"block",
			width:'100%',
			padding:'6px 8px'
		};
		const items = {
			marginBottom:'8px'
		};
		const {comments} = this.state;
		const commentList = comments.length
		?comments.map((comment,i) => {
			let diff = ((new Date()).getTime()) - ((new Date(comment.datetime)).getTime());
			if(diff<1000*60*60*24*10){
				return (
					<Card key={i} style={{marginTop:'20px'}} title={comment.UserName} extra={<a href="#">{comment.datetime}</a>}>
						{comment.Comments}				
					</Card>	
				)
			}
		})
		:'还没有人评论，快抢沙发';
		return (
			<div>
				<Row>
					<Col span={24}>
						<div style={{padding:"20px"}}>
							{commentList}
						</div>
						<Card key="2" title="发表评论：" style={{ width: 'auto',margin:'20px' }}>
						     <Form onSubmit={this.handleSubmit} className="login-form">
						        <FormItem style={items}>
						        	<textarea class="textarea" style={textarea} {...getFieldProps('remark')} placeholder="请输入您的评论"></textarea>
						        </FormItem>
						        <FormItem style={items}>
						          <Button onClick={this.handlerSubmit.bind(this)} type="primary" htmlType="submit" style={{width:'100px'}}>
						            发表评论
						          </Button>
						        </FormItem>
						    </Form>    
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

const FormComment = Form.create()(Comment);
export default FormComment;