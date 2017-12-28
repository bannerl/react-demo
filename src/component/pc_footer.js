import React,{ Component } from 'react';
import {Row,Col} from 'antd';
import styles from '../component_css/pc_footer.scss';
class footer extends React.Component {
	render () {
		return (
			<footer class={styles.footer}>
				<Row> 
					<Col span={12} offset={6}>
					Copyright&nbsp;&copy;&nbsp;2017-2018 All Rights Reserved
					</Col>
				</Row>
			</footer>
		)
	}
}
export default footer;