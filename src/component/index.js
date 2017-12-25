import React,{Component} from 'react';

import Header from './header';
import Footer from './footer';
import MediaQuery from 'react-responsive';

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
				
				<Footer />
			</div>
		)
	}
}


