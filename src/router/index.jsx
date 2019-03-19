import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Main from '../layouts/Main';
import NotFound from '../pages/NotFound';
import HomePage from '../pages/HomePage';

const RouterConfig = [
	{
		path: '/',
		exact: true,
		strict: true,
		component: HomePage
    }, 
    {
		path: '/notFound',
		exact: true,
		strict: true,
		component: NotFound
	}, 
] 

function times(){
	let time1=(new Date()).getTime()
	let time2=localStorage.DloginStatus==undefined?time2=1:time2=JSON.parse(localStorage.DloginStatus)
	if(time1-time2>7200000){
		return false;
	}else{
		return true;
	}
}

function check(pre,next){
	console.log("路由，，，，",pre)
	console.log("看密码",next)
}

const RootRouter = ({ history }) => (
	<Router history={history}  onChange={check}>
		{/* exact用来关闭局部跳转 */}
		<Switch>
			<Route exact strict path="/notFound" component={NotFound} />
			<Route strict path="/" component={Main} />
			<Route component={NotFound} />
		</Switch>
	</Router>
)

export { RouterConfig, RootRouter }
 