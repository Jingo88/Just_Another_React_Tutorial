import React from 'react';
import HomeComponent from '../components/HomeComponent';

import {multiSearch} from '../helpers/helpers'

const HomeContainer = React.createClass({
	getInitialState(){
		return {
			loading: false,
			search: false,
			movieTitle: "",
			moviesFound: []
		}
	},
	handleUserSubmit(event){
		event.preventDefault();

		console.log(event.target)
		console.log($(event.target).find("input:text").val())

		let movieTitle = $(event.target).find("input:text").val();

		// multiSearch(movieTitle)
		// 	.then(function(data){
		// 		console.log(data)
				
		// 		this.setState({
		// 			search : true,
		// 			movieTitle : movieTitle,
		// 			moviesFound : data
		// 		})
		// 	}.bind(this))

		multiSearch(movieTitle)
			.then((data) => {
				console.log(data)
				
				this.setState({
					search : true,
					movieTitle : movieTitle,
					moviesFound : data
				})
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