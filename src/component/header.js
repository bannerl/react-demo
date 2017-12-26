import React,{ Component } from 'react';
import propTypes from 'prop-types';
import {Row,Col, Menu, Icon,Modal, Button,Input,Form} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
		    current: 'shehui',
		    visible: false,
		    loading:false,
		    login:false
		    
	  	}
	}
	showModal () {
	    this.setState({
	      visible: true,
	    });
	}
	handleOk (e) {
	    this.setState({ loading: true });
	    const data = this.props.form.getFieldsValue();
		const fetchMethod = {method:"GET"};
	    e.preventDefault();
	    
	    fetch('http://localhost:8080/ai?username='+data.userName
	    +'&password='+data.password+'&confirmpassword='+data.confirmPassword,fetchMethod)
		.then(response => response).then(json => {
			//console.log(json)
		});
	    setTimeout(() => {
	      this.setState({ loading: false, visible: false });
	    }, 200);
	}
	handleLogin (e) {
		this.setState({login:false});
		const data = this.props.form.getFieldsValue();
		const fetchMethod = {method:"POST"};
		console.log(data);
		fetch('http://localhost:8080/ai?username='+data.r_userName
	    +'&password='+r_data.password,fetchMethod)
		.then(response => response).then(json => {
			//console.log(json)
		});
	}
	loginCancel (e) {
		this.setState({login:false})
	}
	handleCancel (e) {
	    this.setState({
	      visible: false,
	    });
	}
	showLoginModal (e) {
		this.setState({
	      login: true,
	    });
	}
	handleClick (e) {
	    this.setState({
	      current: e.key,
	    });
	    if(e.key==='register') {
	    	this.showModal();
	    	//fetch('http://localhost:8081/ai?id=1')
			//.then(response => response.json()).then(json => {});
	    }
	    if(e.key === 'login') {
	    	this.showLoginModal();
	    }
	}
	
	render () {
		const { getFieldDecorator } = this.props.form;
		return (
			<div class="pc-header">
				<Row>
					<Col span={2}></Col>
					<Col span={2}>
						<img src="image/news.png" />
					</Col>
					<Col span={14}>
						<Menu 
							mode="horizontal"
							onClick={this.handleClick.bind(this)}
							selectedKeys={[this.state.current]}
						>
							<Menu.Item key="shehui">
					          	<Icon type="appstore-o" />社会
					        </Menu.Item>
					        <Menu.Item key="jingji">
					          	<Icon type="appstore-o" />经济
					        </Menu.Item>
					        <Menu.Item key="tiyu">
					          	<Icon type="appstore-o" />体育
					        </Menu.Item>
					        <Menu.Item key="yule">
					          	<Icon type="appstore-o" />娱乐
					        </Menu.Item>
					        <Menu.Item key="register">
					        	<Icon type="appstore-o" />注册
					        </Menu.Item>
					        <Menu.Item key="login">
					        	<Icon type="appstore-o" />登录
					        </Menu.Item>
						</Menu>
					</Col>
					<Col span={2}></Col>
				</Row>
				<Modal
		          title="注册"
		          visible={this.state.visible}
		          footer={[
		            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk.bind(this)}>
		              确定
		            </Button>,
		            <Button key="back" onClick={this.handleCancel.bind(this)}>关闭</Button>,
		          ]}
		        >
				 	<Form className="login-form">
			          <FormItem>
				          {getFieldDecorator('userName', {
				            rules: [{ required: true, message: 'Please input your username!' }],
				          })(
				            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
				          )}
				      </FormItem>
				      <FormItem>
				          {getFieldDecorator('password', {
				            rules: [{ required: true, message: 'Please input your Password!' }],
				          })(
				            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
				          )}
				       </FormItem>
				       <FormItem>
				          {getFieldDecorator('confirmPassword', {
				            rules: [{ required: true, message: 'Please input your Password!' }],
				          })(
				            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入确认密码" />
				          )}
				       </FormItem>
				    </Form> 
		        </Modal>
		        <Modal
		          title="登录"
		          visible={this.state.login}
		          footer={[
		            <Button key="submit" type="primary" onClick={this.handleLogin.bind(this)}>
		              登录
		            </Button>,
		            <Button key="back" onClick={this.loginCancel.bind(this)}>关闭</Button>,
		          ]}
		        >
				 	<Form className="login-form">
			          <FormItem>
				          {getFieldDecorator('r_userName', {
				            rules: [{ required: true, message: 'Please input your username!' }],
				          })(
				            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
				          )}
				      </FormItem>
				      <FormItem>
				          {getFieldDecorator('r_password', {
				            rules: [{ required: true, message: 'Please input your Password!' }],
				          })(
				            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
				          )}
				       </FormItem>
				    </Form> 
		        </Modal>
			</div>
		)
	}
}
const WrappedNormalLoginForm = Form.create()(Header);
export default WrappedNormalLoginForm;