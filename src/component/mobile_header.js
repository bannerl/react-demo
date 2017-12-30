import React from 'react';
import { Tabs, Icon,Row,Col,message,Modal,Form,Input,Button} from 'antd';
import {Link} from 'react-router';
import '../css/mobile_main.css';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class MobileHeader extends React.Component {
	constructor () {
		super();
		this.state = {
		    visible:false,
		    hasLogined:false,
		    nickName:'',
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
  
  render() {
  	const { getFieldDecorator } = this.props.form;
  	const userShow = this.state.hasLogined
  	? <Link to={`/usercenter`}>
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
          <Tabs defaultActiveKey="1">
		    <TabPane tab="注册" key="1">
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
			       <FormItem>
				        <Button type="primary" htmlType="submit" className="login-form-button">
				            注册
				       </Button>
			        </FormItem>
			    </Form> 
		    </TabPane>
		    <TabPane tab="登录" key="2">
		    	<Form className="login-form">
		          <FormItem>
			          {getFieldDecorator('l_userName', {
			            rules: [{ required: true, message: '请输入你的用户名' }],
			          })(
			            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
			          )}
			      </FormItem>
			      <FormItem>
			          {getFieldDecorator('l_password', {
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