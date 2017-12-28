import React from 'react';
import { Menu, Icon,Row,Col } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class App extends React.Component {
	constructor () {
		super();
		this.state = {
		    current: 'mail',
		}
	}
  handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
      	<Row>
      		<Col span={8}>
      			aadf
      		</Col>
      		<Col span={6}>
      			aadf
      		</Col>
      		<Col span={4}>
      			aadf
      		</Col>
      		<Col span={4}>
      			aadf
      		</Col>
      		<Col span={4}>
      			aadf
      		</Col>
      		<Col span={4}>
      			aadf
      		</Col>
      	</Row>
      </div>
    );
  }
}

