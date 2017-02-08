import React from "react";
import MovieDetailsComponent from "../components/MovieDetailsComponent";

import {singleSearch, multiSearch} from '../helpers/helpers';

var styles = {
	details: {
		color: "#ED6A5A"
	},
	mTitle: {
		color: '#ED6A5A',
		fontWeight: '700',
		textDecoration: "underline"
	}
}

class MovieDetailsContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			loading: true,
			movieInfo: {}
		}
		this.getSingleMovie = this.getSingleMovie.bind(this);
	}
	componentDidMount(){
		const {Title, Year} = this.props.data;

		this.getSingleMovie(Title, Year);
	}
	getSingleMovie(title,year){
		singleSearch(title, year)
			.then((data) => {
				this.setState({
					loading: false,
					movieInfo: data
				})
			})
	}
	render(){
		const {loading, movieInfo} = this.state;

		return (
			<MovieDetailsComponent
				movie={this.props.data}
				loading = {loading}
				movieInfo = {movieInfo}/>
		)
	}
}

export default MovieDetailsContainer;