import React from 'react';
import { Link } from 'react-router'

var styles = {
	navBar: {
		backgroundColor: "#F2EFEA",
	},
	fontColor: {
		color: "#ED6A5A",
	},
	logo: {
		color: "#ED6A5A",
		fontWeight: "1.5em",
		fontSize: "1.5em"
	}
}

const Main = React.createClass({
	render(){
		return (
			<div>
				<nav>
				  <div 
				  	className="nav-wrapper"
				  	style = {styles.navBar}>
				  	<Link 
				  		to='/'
				  		style={styles.logo}> 
				  		Movie Lister
				  	</Link>
				    
				    <ul 
				    	id="nav-mobile" 
				    	className="right hide-on-med-and-down">

				      <li><a href="/" style={styles.fontColor}>Home</a></li>
				      <li><a href="/" style={styles.fontColor}>Login</a></li>
				      <li><a href="/" style={styles.fontColor}>Register</a></li>
				    </ul>
				  </div>
				</nav>
	      {this.props.children}
				
			</div>
		)
	}
})

export default Main;