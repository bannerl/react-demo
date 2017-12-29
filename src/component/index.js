import React from 'react';

import Header from './pc_header';
import Footer from './pc_footer';
import MediaQuery from 'react-responsive';
import NewsContent from './pc_newscontent';

import MobileHeader from './mobile_header';
import MobileNewsContent from './mobile_news_content';

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
					<NewsContent />
					<Footer />
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<MobileHeader />
					<MobileNewsContent />
				</MediaQuery>
			</div>
		)
	}
}


