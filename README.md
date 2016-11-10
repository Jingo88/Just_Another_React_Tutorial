# Just Another React Tutorial

## What is React?

* React is a JavaScript Library created by Facebook
* Write organized code
* Write code quickly
* Utilizes components
* Virtual DOM efficiency

---

## What We're Building

* In this tutorial we'll be building a web app that will search for movies
* We'll be using the OMDB API
* Clone this repo onto your computer
* Then grab all the dependencies using:

---

## Other Companion Technologies

* OMDB API - I picked this because it is a free api that does not require a key. However, IMDB does not allow people to take their images so keep that in mind if you are trying to utilize OMDB for hosting an actual movie app
* Webpack - We use this to bundle our modules. When you run `npm start` you are actually starting the "webpack-dev-server" which will take care of everything for us. If you were to build your own full stack application you will need to build a `webpack.config.js` file and hook it up to your server. 
* ES6 - The newest version of JavaScript. Also known as `es2015`
* JSX - A preprocessor that allows us to write XML syntax inside of our JavaScript files. Since we are using a Virtual DOM JSX makes it look as close to writing HTML as possible.
* Axios - A promise based http client. Make XMLHttpRequests
* Babel - Transform our ES6 and JSX to JavaScript
* Node - A runtime environment for JavaScript. 
	* From [https://nodejs.org/en/](https://nodejs.org/en/)

```
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
```
* npm - the package manager for node modules

## ES6 / ES2015 Syntax

***This section will briefly cover some of the es6 syntax in case you are not familiar with it***

##### Destructuring

* Destructuring - seperating an object into variables for ease
* Below is an example of something that may go in a render function

```
<MovieListComponent 
	data={props.data.moviesFound} 
	loading={props.data.loading}/>
```
* Instead of repeating `props.data` we can use the syntax in the following example

```
const {moviesFound, loading} = props.data;

<MovieListComponent 
	data={moviesFound} 
	loading={loading}/>
```

##### var / let / const

* `let` and `const` are similar to `var` in that they both can be used to declare variables.
* `let` declarations will not be `hoisted` to the function level scope. Rather it will only be hoisted in the block level scope
* `const` is used to declare an immutable object

##### Imports

```
var React = require('react');
```
* Same as

```
import React from 'react';
```

##### Arrow Functions

* The big difference between the ES5 function and an ES6 arrow function is it's ability to bind `this` automatically
* In the `HomeContainer` you will see the AJAX call take the data and call `this.setState`

```
multiSearch(movieTitle)
	.then((data) => {
				
	this.setState({
		search : true,
		movieTitle : movieTitle,
		moviesFound : data,
		loading: true
	})
})
```
* In ES5 we would of had to `bind(this)` to make sure the `this.setState` would be targeting the entire component

```
multiSearch(movieTitle)
	.then(function(data){
				
	this.setState({
		search : true,
		movieTitle : movieTitle,
		moviesFound : data,
		loading: true
	})
}.bind(this))
```

##### Declaring Functions

* When you look inside the containers and see functions such as those below

```
getInitialState(){}

handleUserSubmit(){}

render(){}
```
* These are the ES6 equivalent to

```
function getInitialState(){}

function handleUserSubmit(){}

function render(){}
```

---

# Building The App Branch By Branch

## 00 The Master Branch

* Clone this repo

```
npm install
```
* This command is a node command that will download all the node modules listed in the `package.json` file
* If you don't have npm then... you should probably download yourself npm
* Now let's run the server

```
npm start
```
* We only have to type `npm start` because in our `package.json` file, the start keyword is hooked up to running the `webpack-dev-server`
* Now open up your browser and visit `localhost:8080`
* This is our end goal. Or as far as this tutorial will take you. Hopefully you'll learn/understand the concepts in this tutorial enough to build your own apps and incorporate newer concepts. I'll suggest some later on.

## 01 The Set Up

* Lets run through our files and folders
* `package.json` - again this is used to tell people your dependencies for this app. We used it to install the correct node modules
* `app/.babelrc` - To use babel to transform our items we have to pass in "react" and "es2015"
* `index.html` - has some cdns for jquery, materialize. Also has only a single element with an id of `app`. We're going to target this in our JS file

##### `index.js` - The Important Stuff!

```
import React from 'react';
import {render} from 'react-dom';

function HomeComponent(props){
	return(
		<div>
			<h1>Hello World!!!</h1>
			<h3>You're using REACT!!!!</h3>
		</div>
	)
}
const HomeContainer = React.createClass({
	render(){
		return(
			<HomeComponent/>
		)
		
	}
})
render(
	<HomeContainer/>,
	document.getElementById('app')
)
```
* the imports are ES6 syntax. We are grabbing what we want from the node modules we installed earlier

##### Rest of the code

* `const` - an ES6 syntax that we are using to declare an object instead of using `var`. Const also tells us that this object is `immutable`
* `render(){}` - ES6 syntax. This just means `function render(){}`
* `<HomeComponent/>` - JSX syntax inside of the `return / render` of Container
* All const/containers must have a render function with a return statement, returning an object that represents the virtual DOM
* The last render is coming from the `react-dom` node module and we are passing it all of our objects to render to our element with an id of `app`

##### Containers vs Components

* Many tutorials will use some of the following technologies
	* `Containers vs Components`
	* `Smart and Dumb Components`
	* `Containers vs Stateless Presentational Components`
* We'll stick with the first one
* Our Containers will hold all the `state` and the `logic` for that piece of the Virtual DOM
* Our Components will be logicless and stateless. Their only goal is to present the element to the page. You can put your styling here. 

## 02 Separation of Concerns

* Now in this branch we're going to separate everything out. 
* We learned about Containers and Components but now we're going to give them their own folders. 
* In a larger app you might even have sub directories inside of these folders
* Since these are all new files we'll have to export and import them into each other
* Here's an example of importing and exporting in our `HomeContainer` file

```
import React from 'react';
import HomeComponent from '../components/HomeComponent';

const HomeContainer = React.createClass({
	render(){
		return(
			<HomeComponent/>
		)
	}
})

export default HomeContainer;
```
* Import the HomeComponent for use
* Export the const object so the `index.js` file can use it
* Below is how we export from our `HomeComponent`

```
function HomeComponent(props){
	return(
		<div className="container" style={styles.centering}>
			<h1>This Is Your Movie App!</h1>
			<div className="row">
		    <form className="col s10 offset-s2 m4 offset-m4">
		    	<input 
		    		placeholder="Enter Movie or TV Show Title" 
		    		type="text"
		    		className="validate"/>
		    	<input 
		    		type="submit"
		    		hidden/>
		    </form>
		  </div>
		</div>
	)
}
module.exports = HomeComponent;
```
* We are exporting our `Stateless Presentational Component` so the HomeContainer can use it
* ***REMEMBER*** this is a component that will NOT HOLD any state or logic. Hence the name `Stateless Presentational Component`
* `index.js` Now Our Index.js File looks like this!!!

```
import React from 'react';
import {render} from 'react-dom';

import HomeContainer from './containers/HomeContainer';


render(
	<HomeContainer/>,
	document.getElementById('app')
)
```

##### TAKEAWAY: Containers vs Components PART TWO

* Now you can start seeing the organizational piece of React.
* Each component is just a JavaScript object that we can import/export and drop any where we want in our site.
* Utilizing components in this manner lets us keep them small and also makes them reusable

## 03 State and Props

* If we keep our logic in one place and the styling in another place how do the two talk to each other?
* `State and Props` - These are the meat and potatoes of React, or if you're vegetarian, lettuce and tomatoes. 
* Your `State` is similar to props but acts as a private object that is only accessible by that component.

##### HomeContainer

* Inside our container we will use a built in function called `getInitialState`
* `getInitialState()` 
	* ES6 for `function getInitialState()`
	* This is a built in React function that must ALWAYS return a Object
	* This object is immutable
		* If `search` was a key in your state you cannot change it in the following manner `this.search = blah`
		* we'll cover how to change these later
	* You can pass this whole object or just specific parts to the component
* `handleUserSubmit()` 
	* This is our own function built to handle an event
	* This event listener will be passed down to the component
* Now when we render our `HomeComponent` we'll use JSX syntax to pass in the props. 
* Feel free to check out the console.log for "this.state"

##### HomeComponent

* Inside our HomeComponent, along with the styling, we can use the props that were passed in to show on the page.

```
	<h2>The name from our props is {props.name}</h2>
```
* props.name was accessible because inside our HomeContainer we rendered the HomeComponent like this

```
	render(){
		console.log(this.state);
		return(
			<HomeComponent 
				data = {this.state}
				name = {this.state.yourName}
				onUserSubmit = {this.handleUserSubmit}/>
		)
	}
```

##### TAKEAWAY: State vs Props | Handle vs On Labeling | Misc.

* Props - This represents the data/functions that can be sent to a component. The component can use this data to populate it's JSX Virtual DOM Elements or add event listeners to the Virtual DOM Elements
* State - An immutable object of information that represents the data for that container and what is available to be passed down to the sub components
* To Change state use the `this.setState` function. We will see and example of this in the following branches
* When creating and passing functions that will handle events best practice is to use `"handle"` when creating the event listener and `"on"` when passing it as a prop
* `event.preventDefault()` is used to prevent the form from reloading

## 04 Ajax and Axios

##### Recap for Event Listeners

* Alright so this app isn't going to just stop at console logging
* We can grab the user input with our `handleUserSubmit` function and passing it down as a prop called `OnUserSubmit` to our Home Component.
* Now we have to make calls to the OMDB API

##### MOAR ORGANIZATION!!! (Set Up AJAX Calls)

* Again, we want to organize our code into small files with a specific kind of structure
* For these AJAX calls we're going to use a node module called `Axios`
* These calls will be in the `helpers` file of the `helpers` directory
* We're going to import and export them the same way we do with our containers and components

##### Inside The Helpers File

```
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
			console.warn("Error will your Single Search Helper");
		})	

}

function multiSearch(title){

	let endpoint = multiTitle + title

	return axios.get(endpoint)
		.then(function(response){

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
```

* Import the Axios library
* Set up our endpoints for the API
* Build the function so that the proper endpoint will be combined with the users search inquiry
* The data that comes back will be in json format
* We will return that data to the container it is called. 
* At the bottom of the file we export all our helper fuctions.

##### HandleUserSubmit Calling Helper Functions

* Make sure to import the helper functions at the top along with your other imports 

```
import {multiSearch} from '../helpers/helpers'
```

* Now lets look at the actual user submit function

```
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
```

* We're keeping the console logs for now to make sure we have the users input
* We're setting the user input to a variable that will be passed into the `multiSearch` helper function
* The data that is returned from `multiSearch` will be passed in as `data` inside of the `.then` promise.

## 05 Render Movies

##### Update State in the Container

* Take a look at what we've done with the handleUserSubmit function
* We know the `data` we get back inside `.then` is an array of objects
* We are going to use Reacts `this.setState` function to set that `data` returned from our axios call to the key `moviesFound` inside our state. 

```
	handleUserSubmit(event){
		event.preventDefault();

		console.log(event.target)
		console.log($(event.target).find("input:text").val())

		multiSearch(movieTitle)
			.then((data) => {
				
				this.setState({
					search : true,
					movieTitle : movieTitle,
					moviesFound : data
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
```
* Our render function stays the same.
* However, since the state change the `data={this.state}` will reflect that change and pass it down as props to our `HomeComponent`

##### Update our Home Component to render the movies

```

function HomeComponent(props){

	const {moviesFound, loading, search} = props.data;

	return(
		<div className="container" style={styles.centering}>
			<h1>This Is Your Movie App!</h1>
			<div className="row">
		    <form 
		    	className="col s10 offset-s2 m4 offset-m4"
		    	onSubmit = {props.onUserSubmit}>
		    	<input 
		    		placeholder="Enter Movie or TV Show Title" 
		    		type="text"
		    		className="validate"/>
		    	<input 
		    		type="submit"
		    		hidden/>
		    </form>
		  </div>

		  {
		  	search === true ? 
		  	<MovieListComponent 
		  		data={moviesFound} 
		  		loading={loading}/> 
		  	: 
		  	<h4>Let us help you find what are you looking for?</h4>
		  }
		</div>
	)
}

```
* The only thing that has changed here is the ternary operator 
* What the hell is the ternary operator saying?
	* Assess if props.data.search is true
	* If it is true render the `MovieListComponent` and pass it the props of `moviesFound` (the array of movie objects)
	* If it is false we'll render a sub header for the user to see

##### MovieComponent

* Lets take a look at the MovieListComponent first.
* Inside the return function we are using `props.data.map` to loop through the array of objects.
* It will apply the object at EACH ITERATION as props to the `MovieUI` component
* In turn each `MovieUI` component will call the `MoviePoster` function to see if we have an image or not to show the user. 
	* If there is an image return that in an image tage
	* If there is not an image return an image tag with the default image

```

function MoviePoster(props){
	return props.data === "N/A"
		? <img style={styles.posterImage} className="activator" src="http://www.nyctransitforums.com/forums/fcontent/default.png" />
		: <img style={styles.posterImage} className="activator" src={props.data} />
}

function MovieUI(props){
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
				
			</div>
		</div>
	)
}

function MovieListComponent(props){
	return (
		<div className="row">
			{props.data.map(function(movie){
				return <MovieUI 
								data={movie}/>
			})}
		</div>
	)
}

module.exports = MovieListComponent;
```	

##### MOAR ON this.setState | ES6 Arrow Functions | Misc.

* `this.setState` runs asynchronously
* `this.setState` will automatically re-render the component, passing the new state down as props
* Please make sure you check out the ES6 section in this markdown to understand how the arrow function is taking care of the `bind(this)` that is normally needed.
* Why bother with a Movie Component? Can't we just stick those functions inside the same file as our Home Component?
	* Yes it would definitely work the same if we put everything in the Home Component
	* BUT REMEMBER, the purpose of breaking these up is to `keep our files small, our code organized, and our components reusable`
	* If a component is getting too big think about how to break it up into smaller files. 
* `Imperative vs Declarative programming!!!`
	* We have to use props.data.map inside our MovieComponent return. We cannot use a for loop inside of the JSX. 




## Run Forest Run! Going The Extra Mile

* React Router
* Component Life Cycle
* 




