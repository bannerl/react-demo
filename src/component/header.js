import React,{ Component } from 'react';
import propTypes from 'prop-types';
import {Row,Col, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class header extends React.Component {
	constructor () {
		super();
		this.state = {
		    current: 'shehui',
	  	}
	}
	handleClick (e) {
	    this.setState({
	      current: e.key,
	    });
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
						</Menu>
					</Col>
					<Col span={2}></Col>
				</Row>

			</div>
		)
	}
}
export default header;