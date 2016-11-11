import React from "react";
import MovieDetailsComponent from "../components/MovieDetailsComponent";

import { singleSearch} from '../helpers/helpers';

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

const MovieDetailsContainer = React.createClass({
	getInitialState(){
		return{
			loading: true,
			movieInfo: {}
		}
	},
	componentDidMount(){
		this.getSingleMovie(this.props.data.Title, this.props.data.Year)
	},
	getSingleMovie(title,year){
		singleSearch(title, year)
			.then((data) => {
				this.setState({
					loading: false,
					movieInfo: data
				})
			})
	},

	render(){
		return (
			<MovieDetailsComponent
				movie={this.props.data}
				loading = {this.state.loading}
				movieInfo = {this.state.movieInfo}/>
		)
	}
})

export default MovieDetailsContainer;