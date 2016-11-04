import React from 'react';
import HomeComponent from '../components/HomeComponent';

import {multiSearch} from '../helpers/helpers'

const HomeContainer = React.createClass({
	getInitialState(){
		return {
			loading: false,
			search: false,
			movieTitle: "",
			yourName: "Jason"
		}
	},
	handleUserSubmit(event){
		event.preventDefault();

		console.log(event.target)
		console.log($(event.target).find("input:text").val())

		let movieTitle = $(event.target).find("input:text").val();

		multiSearch(movieTitle)
			.then(function(data){
				console.log(data)
			})
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