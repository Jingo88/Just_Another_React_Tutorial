import React from 'react';
import HomeComponent from '../components/HomeComponent';

const HomeContainer = React.createClass({
	getInitialState(){
		return {
			search: true,
			movieTitle: "",
			yourName: "Jason"
		}
	},
	render(){
		console.log(this.state);
		return(
			<HomeComponent 
				data = {this.state}
				name = {this.state.yourName}/>
		)
	}
})

export default HomeContainer;