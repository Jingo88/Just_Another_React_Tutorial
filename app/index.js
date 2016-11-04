import React from 'react';
import {render} from 'react-dom';

function HomeComponent(props){
	return(
		<div>
			<h1>Hello World!!!</h1>
			<h3>Youre using REACT!!!!</h3>
		</div>
	)
}

const HomeContainer = React.createClass({
	render(){
		return(
			<HomeComponent/>
		)
		
	}
})

render(
	<HomeContainer/>,
	document.getElementById('app')
)