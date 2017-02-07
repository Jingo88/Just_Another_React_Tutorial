import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import MovieDetailsContainer from '../containers/MovieDetailsContainer';

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer}/>
			<Route path="/details" component={MovieDetailsContainer}/>
		</Route>
	</Router>
)

export default routes;