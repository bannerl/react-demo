import React,{ Component } from 'react';
import propTypes from 'prop-types';
import {Row,Col, Menu, Icon,Modal, Button,Input,Form} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class header extends React.Component {
	constructor () {
		super();
		this.state = {
		    current: 'shehui',
		    visible: false
	  	}
	}
	showModal () {
	    this.setState({
	      visible: true,
	    });
	}
	handleOk (e) {
	    console.log(e);
	    this.setState({
	      visible: false,
	    });
	}
	handleCancel (e) {
	    console.log(e);
	    this.setState({
	      visible: false,
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
	  }
	render () {
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
		          title="Basic Modal"
		          visible={this.state.visible}
		          onOk={this.handleOk.bind(this)}
		          onCancel={this.handleCancel.bind(this)}
		        >
		          <p>Some contents...</p>
		          <p>Some contents...</p>
		          <p>Some contents...</p>
		        </Modal>
			</div>
		)
	}
}
export default header;