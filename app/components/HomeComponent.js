import React from 'react';

const styles = {
	centering: {
		textAlign: 'center'
	}
}

function HomeComponent(props){
	console.log(props)
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

		  {props.search === true ? <h1>Show the movies</h1> : <h1> Waiting to see some shit</h1>}
		</div>
	)
}

module.exports = HomeComponent;