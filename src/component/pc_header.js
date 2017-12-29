import React,{ Component } from 'react';
import propTypes from 'prop-types';
import {Row,Col, Menu, message,Icon,Modal, Button,Input,Form,Tabs} from 'antd';
import {Link} from 'react-router';
import styles from '../component_css/pc_header.css';
import {setStore,getStore} from '../common/savaLocal';

const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
		    current: 'top',
		    visible: false,
		    hasLogined:false,
		    action:'register',
		    userNickName:'',
		    UserInfo:''
	  	}
	}
	callback (key) {
	  this.setState({'action':key});
	}
	handleOk (e) {
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
	    	if(this.state.action === 'login'&&formData.password&&json.UserId){
	    		let obj = {};
				obj.userId = json.UserId;
				obj.nickName = json.NickUserName;
				setStore('UserInfo',obj);
				this.setState({ UserInfo: json,hasLogined:true});
	    	} else if(this.state.action === 'register') {
	    		message.success("注册成功，请登录",1.5);
	    	}
		});
		
		this.setState({
	      visible: false,
	    });
	}
	componentWillMount () {
		const Info = getStore('UserInfo');
		if(Info&&JSON.parse(Info).userId){
			this.setState({hasLogined:true,UserInfo:JSON.parse(Info)});
		}
	}
	loginout (e) {
		this.setState({
	      hasLogined: false,
	    });
	    setStore("UserInfo",'');
	}
	handleCancel (e) {
	    this.setState({
	      visible: false,
	    });
	}
	handleClick (e) {
	    this.setState({
	      current: e.key,
	    });
	    if(e.key==='user') {
	    	if(this.state.hasLogined){
	    		
	    	} else {
	    		this.setState({
			      visible: true,
			    });
	    	}
	    }
	}
	
	render () {
		const {hasLogined,UserInfo} = this.state;
		
		const userState = hasLogined
        ? <Menu.Item key="user">
        	<Button style={{padding:"0 10px"}}>
        	<Link to={`usercenter/${UserInfo.UserId}`}>个人中心</Link>
        	</Button>
        	<Button onClick={this.loginout.bind(this)} type="primary" style={{marginLeft:'10px',padding:"0 10px"}}>退出</Button>
          </Menu.Item>
		: <Menu.Item key="user">
        	注册/登录
          </Menu.Item>;
		const { getFieldDecorator } = this.props.form;
		
		return (
			<div class={styles.header}>
				<Row>
					<Col span={2}></Col>
					<Col span={2}>
						<img src="image/news.png" />
						<span class={styles.title}>React-新闻</span>
					</Col>
					<Col span={18}>
						<Menu 
							mode="horizontal"
							onClick={this.handleClick.bind(this)}
							selectedKeys={[this.state.current]}
						>
							<Menu.Item key="top">
					          	<Icon type="appstore" />头条
					        </Menu.Item>
							<Menu.Item key="shehui">
					          	<Icon type="appstore" />社会
					        </Menu.Item>
					        <Menu.Item key="guonei">
					          	<Icon type="appstore" />国内
					        </Menu.Item>
					        <Menu.Item key="guoji">
					          	<Icon type="appstore" />国际
					        </Menu.Item>
					        <Menu.Item key="yule">
					          	<Icon type="appstore" />娱乐
					        </Menu.Item>
					        <Menu.Item key="junshi">
					          	<Icon type="appstore" />军事
					        </Menu.Item>
					        <Menu.Item key="keji">
					          	<Icon type="appstore" />科技
					        </Menu.Item>
					        <Menu.Item key="jingji">
					          	<Icon type="appstore" />财经
					        </Menu.Item>
					        <Menu.Item key="shishang">
					          	<Icon type="appstore" />时尚
					        </Menu.Item>
					        {userState}
						</Menu>
					</Col>
					<Col span={2}></Col>
				</Row>
				<Modal
		          title=""
		          visible={this.state.visible}
		          onCancel={this.handleCancel.bind(this)}
		          footer={[
		            <Button key="submit" type="primary" onClick={this.handleOk.bind(this)}>
		              确定
		            </Button>,
		            <Button key="back" onClick={this.handleCancel.bind(this)}>关闭</Button>,
		          ]}
		        >
					<Tabs defaultActiveKey="register" onChange={this.callback.bind(this)}>
						<TabPane tab="注册" key="register">
							<Form className="login-form">
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
						    </Form> 
						</TabPane>
						<TabPane tab="登录" key="login">
							<Form className="login-form">
					          <FormItem>
						          {getFieldDecorator('userName', {
						            rules: [{ required: true, message: '请输入用户名' }],
						          })(
						            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
						          )}
						      </FormItem>
						      <FormItem>
						          {getFieldDecorator('password', {
						            rules: [{ required: true, message: '请输入密码' }],
						          })(
						            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
						          )}
						       </FormItem>
						    </Form> 
						</TabPane>
					</Tabs>
		        </Modal>
			</div>
		)
	}
}
const WrappedNormalLoginForm = Form.create()(Header);
export default WrappedNormalLoginForm;