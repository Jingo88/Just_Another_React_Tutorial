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

		let movieTitle = $(event.target).find("input:text").val();

		this.setState({
			loading: false
		})

// ES6 Arrow function binds the this object from the outer scope to where we are calling setState
		multiSearch(movieTitle)
			.then((data) => {
				
				this.setState({
					search : true,
					movieTitle : movieTitle,
					moviesFound : data,
					loading: true
				})
			})
	},
	render(){
		return(
			<HomeComponent 
				data = {this.state}
				onUserSubmit = {this.handleUserSubmit}/>
		)
	}
})

export default HomeContainer;