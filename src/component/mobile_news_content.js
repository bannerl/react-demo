import React,{ Component } from 'react';
import {Icon,Carousel, Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import MobileNewsBlock from './mobile_news_block';


export default class MobileNewsContent extends React.Component {
	
	constructor () {
		super();
		this.state = {
			 mode: 'top',
		}
	}
	
	render () {
		const settings = {
			dots: true,
			infinite: true,
			speed: 800,
			slidesToShow: 1,
			autoplay: true
		};
		const { mode } = this.state;
		return (
			<div>
				<div>
			        <Tabs
			          defaultActiveKey="1"
			          tabPosition={mode}
			        >
			          <TabPane tab="热门新闻" key="1">
			          	<div class="carousel-wrapper">
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
						<MobileNewsBlock title="热门新闻" type="top" count="10" />
			          </TabPane>
			          <TabPane tab="国际" key="2">
			          	<MobileNewsBlock title="国际" type="guoji" count="10" />
			          </TabPane>
			          <TabPane tab="国内" key="3">
			          	<MobileNewsBlock title="国内" type="guonei" count="10" />
			          </TabPane>
			          <TabPane tab="社会" key="4">
			          	<MobileNewsBlock title="社会" type="shehui" count="10" />
			          </TabPane>
			          <TabPane tab="财经" key="5">
			          	<MobileNewsBlock title="国际" type="caijing" count="10" />
			          </TabPane>
			          <TabPane tab="娱乐" key="6">
			          	<MobileNewsBlock title="娱乐" type="yule" count="10" />
			          </TabPane>
			          <TabPane tab="科技" key="7">
			          	<MobileNewsBlock title="科技" type="keji" count="10" />
			          </TabPane>
			          <TabPane tab="体育" key="8">
			          	<MobileNewsBlock title="体育" type="tiyu" count="10" />
			          </TabPane>
			          <TabPane tab="军事" key="9">
			          	<MobileNewsBlock title="军事" type="junshi" count="10" />
			          </TabPane>
			        </Tabs>
			    </div>
			</div>
		)
	}
}
