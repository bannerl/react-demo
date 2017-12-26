import React,{Component} from 'react';
import {Row,Col,Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import Header from './header';
import Footer from './footer';
import MediaQuery from 'react-responsive';
import ArticleBlock from './pc_block';

export default class Index extends React.Component {
	render () {
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<Header />
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<div>sddfsdf</div>
				</MediaQuery>
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<Tabs>
							<TabPane tab="Tab 1" key="1">
								<ArticleBlock count="2" type="top" />
							</TabPane>
						    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
						    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
						</Tabs>
					</Col>
					<Col span={2}></Col>
				</Row>
				<Footer />
			</div>
		)
	}
}


