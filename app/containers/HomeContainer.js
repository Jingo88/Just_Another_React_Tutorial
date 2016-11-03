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
	handleUserSubmit(event){
		event.preventDefault();

		console.log(event.target)
		console.log($(event.target).find("input:text").val())
	},
	render(){
		console.log(this.state);
		return(
			<HomeComponent 
				data = {this.state}
				name = {this.state.yourName}
				onUserSubmit = {this.handleUserSubmit}/>
		)
	}
})

export default HomeContainer;