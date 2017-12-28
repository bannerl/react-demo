import React from 'react';
import {Row,Col,Tabs,Carousel } from 'antd';
const TabPane = Tabs.TabPane;
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
				<Row>
					<Col span={2}></Col>
					<Col span={16}>
						<div>
							<div class="pc_canrousel">
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
							</div>
							<Tabs class="pc_news_tabs">
								<TabPane tab="热门新闻" key="1">
									<ArticleBlock count="8" type="top" width="370px" />
								</TabPane>
							    <TabPane tab="国内" key="2">
							    	<ArticleBlock count="8" type="guonei" width="370px" ></ArticleBlock>
							    </TabPane>
							    <TabPane tab="国际" key="3">
							    	<ArticleBlock count="8" type="guoji" width="370px" ></ArticleBlock>
							    </TabPane>
							</Tabs>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
				<Row>
					<Col span={2}></Col>
					<Col span={20} class="container">
						<div class="inline-block article-img">
							<ArticleImg title="国内" item="3" count="6" type="guonei" containerWidth="400px" imgWidth="110" />
						</div>
						<Tabs class="pc_news_tabs">
							<TabPane tab="娱乐" key="1">
								<ArticleBlock count="15" type="yule" width="370px" />
							</TabPane>
						    <TabPane tab="财经" key="2">
						    	<ArticleBlock count="15" type="caijing" width="370px" ></ArticleBlock>
						    </TabPane>
						</Tabs>
						<Tabs class="pc_news_tabs">
							<TabPane tab="科技" key="1">
								<ArticleBlock count="15" type="keji" width="370px" />
							</TabPane>
						    <TabPane tab="社会" key="2">
						    	<ArticleBlock count="15" type="shehui" width="370px" ></ArticleBlock>
						    </TabPane>
						</Tabs>
						<div class="article-img">
							<ArticleImg title="社会" item="8" count="16" type="shehui" containerWidth="100%" imgWidth="120" />
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		)
	}
}


