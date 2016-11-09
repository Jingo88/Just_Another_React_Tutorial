import React from 'react';

import MovieListComponent from './MovieListComponent';

const styles = {
	centering: {
		textAlign: 'center'
	}
}

function HomeComponent(props){

	const {moviesFound, loading, search} = props.data;

	return(
		<div className="container" style={styles.centering}>
			<h1>This Is Your Movie App!</h1>
			<div className="row">
		    <form 
		    	className="col s10 offset-s2 m4 offset-m4"
		    	onSubmit = {props.onUserSubmit}>
		    	<input 
		    		placeholder="Enter Movie or TV Show Title" 
		    		type="text"
		    		className="validate"/>
		    	<input 
		    		type="submit"
		    		hidden/>
		    </form>
		  </div>

		  {
		  	search === true ? 
		  	<MovieListComponent 
		  		data={moviesFound} 
		  		loading={loading}/> 
		  	: 
		  	<h1> Waiting to see some shit</h1>
		  }
		</div>
	)
}

module.exports = HomeComponent;