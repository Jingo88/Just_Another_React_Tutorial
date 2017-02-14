import React from 'react';

import LoadingComponent from './LoadingComponent';

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

function MovieDetailsComponent(props){
	console.log(props);
	
	let movieInfo = props.movieInfo.data

	return (props.loading === true
		? <LoadingComponent/>
		: <div className="card-reveal" style={styles.details}>
  			<span className="card-title" style={styles.mTitle}>  			
  				{movieInfo.Title}
  			<i className="material-icons right">close</i>
  			</span>
  				<p><strong>Director:</strong> {movieInfo.Director}</p>
  				<p><strong>Writer:</strong> {movieInfo.Writer}</p>
  				<p><strong>Actors:</strong> {movieInfo.Actors}</p>
  				<p><strong>Plot:</strong> {movieInfo.Plot}</p>
  				<ul>
  					<li><strong>Genre:</strong> {movieInfo.Genre}</li>
	  				<li><strong>Rated:</strong> {movieInfo.Rated}</li>
	  				<li><strong>Year:</strong> {movieInfo.Year}</li>
	  				<li><strong>Released Date:</strong> {movieInfo.Released}</li>
	  				<li><strong>IMDB Rating:</strong> {movieInfo.imdbRating}</li>
	  				<li><strong>Runtime:</strong> {movieInfo.Runtime}</li>
	  				<li><strong>Type:</strong> {movieInfo.Type}</li>
	  			</ul>
	  			
			</div>
		)
}

export default MovieDetailsComponent;