import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	render(){
		return(
			<div> 
				<nav className="nav">
					<h1> MOAR MOVIES </h1>
					<ul className="menu">	
						<li><Link to='/'> Home </Link></li>
						<li><Link to='/about'> About </Link></li>
					</ul>
				</nav>
				{this.props.children}
			</div>
		)
	}		
}

export default Main;