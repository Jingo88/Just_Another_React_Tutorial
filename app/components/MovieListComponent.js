import React from 'react';
import MovieDetailsContainer from '../containers/MovieDetailsContainer';
import Loading from './LoadingComponent';

var styles = {
	posterImage : {
		width: '100%',
		height: '100%'
	},
	details: {
		color: "#ED6A5A"
	},
	mTitle: {
		color: '#ED6A5A',
		fontWeight: '700',
		textDecoration: "underline"
	}
}

function MoviePoster(props){
	return props.data === "N/A"
		? <img style={styles.posterImage} className="activator" src="http://www.nyctransitforums.com/forums/fcontent/default.png" />
		: <img style={styles.posterImage} className="activator" src={props.data} />
}

function MovieUI(props){
	console.log(props)
	return(
		<div className="col s12 m4">
			<div className="card large">
				<div className="card-image waves-effect waves-block waves-light">
					<MoviePoster 
						data = {props.data.Poster}/>
				</div>

				<div className="card-content">
		      <span className="card-title activator" style={styles.mTitle}>
		      	{props.data.Title}
		      	<i className="material-icons right">more_vert</i>
		      </span>
				</div>

				<div className="card-action" style={styles.details}>
					<a href="#">Add to favorites</a>
					<a href="#">Share</a>
				</div>
				
				<MovieDetailsContainer data={props.data} />
			</div>
		</div>
	)
}

function MovieListComponent(props){
	return (
		<div className="row">
			{props.loading === false ? 
				<Loading/>
				:

				props.data.map(function(movie){
					return <MovieUI 
								data={movie}/>
				})
			}
		</div>
	)
}





module.exports = MovieListComponent;
