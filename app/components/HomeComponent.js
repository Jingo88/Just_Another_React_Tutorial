import React from 'react';

const styles = {
	centering: {
		textAlign: 'center'
	}
}

function HomeComponent(props){
	return(
		<div className="container" style={styles.centering}>
			<h1>This Is Your Movie App!</h1>
			<div className="row">
		    <form className="col s10 offset-s2 m4 offset-m4"
		    	onSubmit = {props.onSubmitMovie}>
		    	<input 
		    		placeholder="Enter Movie or TV Show Title" 
		    		type="text"
		    		className="validate"
		    		onChange = {props.onUpdateMovie}/>
		    	<input 
		    		type="submit"
		    		hidden/>
		    </form>
		  </div>
		</div>
	)
}

module.exports = HomeComponent;