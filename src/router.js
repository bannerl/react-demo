import React from 'react';
import {render} from 'react-dom';

import { Router, Route,Link, browserHistory ,hashHistory } from 'react-router';
//import { render } from 'react-dom';
import App from './Greeter';
import User from './user';
import As from './as';

render(
<Router history={hashHistory}>
    <Route path="/" component={App}>
    	<Route path="/as" component={As}/>
    </Route>
    <Route path="/user" component={User}></Route>
</Router>, 
document.getElementById('root')
);