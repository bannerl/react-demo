import React,{Component} from 'react';
import {Row,Col,Tabs,Carousel } from 'antd';
const TabPane = Tabs.TabPane;

import Header from './header';
import Footer from './footer';
import MediaQuery from 'react-responsive';
import ArticleBlock from './pc_block';
import ArticleImg from './pc_article_img';

export default class Index extends React.Component {
	render () {
		const settings = {
			dots: true,
			infinite: true,
			speed: 800,
			slidesToShow: 1,
			autoplay: true
		};
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
						<Carousel {...settings}>
						    <div>
						    	<img src="./image/carousel_1.jpg" />
						    </div>
						    <div>
						    	<img src="./image/carousel_2.jpg" />
						    </div>
						    <div>
						    	<img src="./image/carousel_3.jpg" />
						    </div>
						    <div>
						    	<img src="./image/carousel_4.jpg" />
						    </div>
						</Carousel>
						<Tabs class="pc_news_tabs">
							<TabPane tab="热门新闻" key="1">
								<ArticleBlock count="6" type="top" width="300px" />
							</TabPane>
						    <TabPane tab="国内" key="2">
						    	<ArticleBlock count="6" type="guonei" width="300px" ></ArticleBlock>
						    </TabPane>
						    <TabPane tab="国际" key="3">
						    	<ArticleBlock count="6" type="guoji" width="300px" ></ArticleBlock>
						    </TabPane>
						</Tabs>
						<Tabs class="pc_news_tabs">
							<TabPane tab="热门新闻" key="1">
								<ArticleBlock count="6" type="top" width="300px" />
							</TabPane>
						    <TabPane tab="国内" key="2">
						    	<ArticleBlock count="6" type="guonei" width="300px" ></ArticleBlock>
						    </TabPane>
						    <TabPane tab="国际" key="3">
						    	<ArticleBlock count="6" type="guoji" width="300px" ></ArticleBlock>
						    </TabPane>
						</Tabs>
						<div class="inline-block">
							<ArticleImg title="国内" count="2" type="guonei" containerWidth="328px" imgWidth="120" />
						</div>
						<div class="inline-block">
							<ArticleImg title="国内" count="6" type="guonei" containerWidth="469px" imgWidth="120" />
						</div>
						<Tabs class="pc_news_tabs">
							<TabPane tab="热门新闻" key="1">
								<ArticleBlock count="6" type="top" width="300px" />
							</TabPane>
						    <TabPane tab="国内" key="2">
						    	<ArticleBlock count="6" type="guonei" width="300px" ></ArticleBlock>
						    </TabPane>
						    <TabPane tab="国际" key="3">
						    	<ArticleBlock count="6" type="guoji" width="300px" ></ArticleBlock>
						    </TabPane>
						</Tabs>
					</Col>
					<Col span={2}></Col>
				</Row>
				<Footer />
			</div>
		)
	}
}


