import React,{Component} from 'react';
import {render} from 'react-dom';
import { Router, Route,Link, browserHistory ,hashHistory } from 'react-router';
import './css/main.css';
//import zhCN from 'antd/lib/locale-provider/zh_CN';
//import moment from 'moment';
//import 'moment/locale/zh-cn';
//moment.locale('zh-cn');

import Index from './component/index';
import User from './component/user';

render (
	<Router history={hashHistory}>
		<Route path="/" component={Index}></Route>
		<Route path="/user" component={User}></Route>
	</Router>,
	document.getElementById('root')
)
