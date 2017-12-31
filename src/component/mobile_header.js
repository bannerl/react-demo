import React from 'react';
import { Tabs, Icon,Row,Col,message,Modal,Form,Input,Button} from 'antd';
import {Link,browserHistory } from 'react-router';
import '../css/mobile_main.css';
import {setStore,getStore} from '../common/localStore';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class MobileHeader extends React.Component {
	constructor () {
		super();
		this.state = {
		    visible:false,
		    hasLogined:false,
		    userInfo:'',
		    action:'register'
		}
	}

	showModal () {
	    this.setState({
	      visible: true,
	    });
	}
	handleOk (e) {
	    this.setState({
	      visible: false,
	    });
	}
	handleCancel (e) {
	    this.setState({
	      visible: false,
	    });
	}
	callback (key) {
		this.setState({action:key})
	}
	componentWillMount () {
		let userInfo = getStore('UserInfo');
		if(userInfo) {
			this.setState({ userInfo: JSON.parse(userInfo),hasLogined:true});
		}
	}
	handleLogin (e) {
		const formData = this.props.form.getFieldsValue();
		const fetchMethod = {method:"GET"};
	    e.preventDefault();
	    
	    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="
	    +this.state.action
	    + "&r_userName=" + formData.r_userName
	    + "&r_password=" + formData.r_password 
	    + "&userName=" + formData.userName
	    + "&password=" + formData.password
	    + "&r_confirmPassword=" + formData.r_confirmPassword, fetchMethod)
	    .then(response => response.json()).then(json => {
	    	if(this.state.action === 'login'&&formData.password&&json){
	    		let obj = {};
				obj.userId = json.UserId;
				obj.nickName = json.NickUserName;
				setStore('UserInfo',obj);
				this.setState({ userInfo: obj,hasLogined:true});
				this.setState({
			      	visible: false,
			    });
	    	} else if(this.state.action === 'register'&&formData.r_password) {
	    		message.success("注册成功，请登录",1.5);
	    	}
		});
	}
  	
  render() {
  	const { getFieldDecorator } = this.props.form;
  	const {userInfo} = this.state;
  	const userShow = this.state.hasLogined
  	? <Link to={`/usercenter/${userInfo.userId}`}>
  		个人中心<Icon type="setting" />
  	</Link>
  	:<div onClick={this.showModal.bind(this)}>注册/登录</div>;
    return (
      <div>
      	<div class="m_header">
		    <div class="h_left">
		      	<img src="./image/m_news.png" alt="logo"/>
		    </div>
		    <div class="h_right">
		      	{userShow}
	  		</div>
	    </div>
	    <Modal
          title=""
          className="modal"
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <Tabs defaultActiveKey="register" onChange={this.callback.bind(this)}>
		    <TabPane tab="注册" key="register">
		    	<Form onSubmit={this.handleLogin.bind(this)} className="login-form">
		          <FormItem>
			          {getFieldDecorator('r_userName', {
			            rules: [{ required: true, message: '请输入你的用户名' }],
			          })(
			            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
			          )}
			      </FormItem>
			      <FormItem>
			          {getFieldDecorator('r_password', {
			            rules: [{ required: true, message: '请输入你的密码' }],
			          })(
			            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
			          )}
			       </FormItem>
			       <FormItem>
			          {getFieldDecorator('r_confirmPassword', {
			            rules: [{ required: true, message: '请再次输入你的密码' }],
			          })(
			            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入确认密码" />
			          )}
			       </FormItem>
			       <FormItem>
				        <Button type="primary" htmlType="submit" className="login-form-button">
				            注册
				       </Button>
			        </FormItem>
			    </Form> 
		    </TabPane>
		    <TabPane tab="登录" key="login">
		    	<Form onSubmit={this.handleLogin.bind(this)} className="login-form">
		          <FormItem>
			          {getFieldDecorator('userName', {
			            rules: [{ required: true, message: '请输入你的用户名' }],
			          })(
			            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
			          )}
			      </FormItem>
			      <FormItem>
			          {getFieldDecorator('password', {
			            rules: [{ required: true, message: '请输入你的密码' }],
			          })(
			            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
			          )}
			       </FormItem>
			       <FormItem>
				        <Button type="primary" htmlType="submit" className="login-form-button">
				            登录
				       </Button>
			        </FormItem>
			    </Form> 
		    </TabPane>
		  </Tabs>
        </Modal>
      </div>
    );
  }
}

const FormMobileHeader = Form.create()(MobileHeader);
export default FormMobileHeader;