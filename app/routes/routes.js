import React from 'react';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';

import Main from '../containers/Main';
import HomeContainer from '../containers/HomeContainer';
import MovieListContainer from '../containers/MovieListContainer';

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer}/>
			<Route path='/details/:title' component={MovieListContainer}/>
		</Route>
	</Router>
)

export default routes;