import React,{Component} from 'react';
import {render} from 'react-dom';
import { Router, Route,Link, browserHistory ,hashHistory } from 'react-router';
//import zhCN from 'antd/lib/locale-provider/zh_CN';
//import moment from 'moment';
//import 'moment/locale/zh-cn';
//moment.locale('zh-cn');

import Index from './component/index';
import User from './component/user';
import NewsDetails from'./component/news_details';

render (
	<Router history={hashHistory}>
		<Route path="/" component={Index}></Route>
		<Route path="/usercenter" component={User}></Route>
		<Route path="/details/:id" component={NewsDetails}></Route>
	</Router>,
	document.getElementById('root')
)
