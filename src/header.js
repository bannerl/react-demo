import React,{ Component } from 'react';

class header extends Component {
	
	render () {
		
		return (
			<div>{this.props.name}这是头部内容</div>
		)
	}
}
export default header;