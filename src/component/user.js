import React,{ Component } from 'react';
import Header from './pc_header';
import Footer from './pc_footer';

export default class User extends Component {
	render () {
		return (
			<div>
				<Header/>
				这是用户中心
				<Footer/>
			</div>
		)
	}
}
