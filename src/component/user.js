import React,{ Component } from 'react';
import Header from './header';
import Footer from './footer';

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
