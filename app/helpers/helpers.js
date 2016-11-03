import axios from 'axios'; 

var singleTitle = "http://www.omdbapi.com/?t="

var multiTitle = "http://www.omdbapi.com/?s="

function singleSearch(title, year){
	let endpoint = singleTitle + title + "&y=" + year;

	return axios.get(endpoint)
		.then(function(response){

			return response
		})
		.catch(function(err){
			
		})	

}

function multiSearch(title){

	let endpoint = multiTitle + title

	// console.log(endpoint)
	return axios.get(endpoint)
		.then(function(response){
			// had to do response.data.Search to send back array of objects
			return response.data.Search
		})
		.catch(function(err){
			console.warn("Error with our multi search helper call" + err)
		})
}

module.exports = {
	singleSearch : singleSearch,
	multiSearch : multiSearch
}
