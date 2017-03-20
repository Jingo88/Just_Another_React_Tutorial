# Just Another React Tutorial

---

## Before Beginning This Tutorial

* Check out the [What Is React Markdown](https://github.com/Jingo88/Just_Another_React_Tutorial/blob/master/What_Is_React.md) for an introduction to the library
* This tutorial will strictly cover React.js concepts but there is another markdown that summarizes the other technologies in this app. 
	* Please review the [Companion Technologies Markdown](https://github.com/Jingo88/Just_Another_React_Tutorial/blob/master/Companion_Technologies.md)
* This tutorial is also written in `ES6`/`ES2015`. If you're not familiar with the differences in syntax please review the [ES6 Syntax Markdown](https://github.com/Jingo88/Just_Another_React_Tutorial/blob/master/ES6_Syntax.md)

---

## What We're Building

* In this tutorial we'll be building a web app that will search for movies using the OMDB API. 
* The user will search for a movie by a title.
* All movies that relate to that title will be returned in JSON format.
* The list of movies will be rendered on the page using React. 
* If a user clicks on a specific movie they will be shown the details of that movie.
* There is an extension to this tutorial that will focus on expanding this app to include the react-router. 
	* You can find this tutorial here [https://github.com/Jingo88/Just_Another_React_Tutorial_Extended](https://github.com/Jingo88/Just_Another_React_Tutorial_Extended)

---

# Building The App Branch By Branch

## 00 The Master Branch / Cloning EVERYTHING!!!

* Let's start by seeing what the final product will look like.
* Clone this repo
* Change directory into the project `Just_Another_React_Tutorial` and run the following command in your terminal

```
npm install
```

* This command is a node command that will download all the node modules listed in the `package.json` file 
* If you don't have npm then... you should probably download npm
* Now let's run the server

```
npm start
```
* We only have to type `npm start` because in our `package.json` file, the start keyword is hooked up to running the `webpack-dev-server`
* Now open up your browser and visit `localhost:8080`
* This is our end goal. Or as far as this tutorial will take you. Hopefully you'll learn/understand the concepts in this tutorial enough to build your own apps and incorporate newer concepts. I'll suggest some later on.

---

## 01 The Set Up

* Now we're going to start from scratch. 
* Let's make a new Git Branch
	* `git checkout -b your_branch_name`
* Go ahead and delete the `containers` `components` and `helpers` directories and the `index.js` file in the `app` directory.
	* You can always refer back to the Github tutorial, or checkout to the master branch 

##### The rest of our files	

* `package.json` - This file is used to list the dependencies of the application. We used it to install the correct node modules
* `app/.babelrc` - To use babel to transform our items we have to pass in "react" and "es2015"
* `index.html` - has some cdns for jQuery, Materialize CSS. Also has only a single element with an id of `app`. We're going to target this in our JS file

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

class HomeContainer extends React.Component{
	render(){
		return(
			<HomeComponent/>
		)
		
	}
}

render(
	<HomeContainer/>,
	document.getElementById('app')
)
```
* the imports are ES6 syntax. We are grabbing what we want from the node modules we installed earlier (remember when we ran that `npm install` command?)

***NOTES***

* Some tutorials may have their containers written with the syntax below 

```
const HomeContainer = React.createClass({
	render(){
		return(
			<HomeComponent/>
		)
		
	}
})
```
* With the updates to the React Library it is recommended to create your containers by extending the React.Component

```
class HomeContainer extends React.Component{
	render(){
		return(
			<HomeComponent/>
		)
		
	}
}
```

##### Rest of the code

* `const` - an ES6 syntax that we are using to declare an object instead of using `var`. Const also tells us that this object is `immutable`
* `render(){}` - ES6 syntax. This just means `function render(){}`
* `<HomeComponent/>` - `JSX syntax` inside of the `return / render` of Container
* All const/containers must have a render function with a return statement, returning an object that represents the virtual DOM
* The last render is coming from the `react-dom` node module.
	* The first argument is the main React component we want to be rendered
	* The second argument is the location in the HTML file that will render it. In this example we target the `div` element with an id of `app`

##### Containers vs Components

* Many tutorials will use some of the following technologies
	* `Containers vs Components`
	* `Smart and Dumb Components`
	* `Containers vs Stateless Presentational Components`
* We'll stick with the first one
* Our Containers will be JavaScript objects that hold all the `state` and the `logic` for that piece of the Virtual DOM
* Our Components will be logicless and stateless. Their only goal is to present the element to the page. You can apply your styling in each component file. We'll do that in the following branches

***Alright, time for the next step 02_separation_of_concerns***

---

## 02 Separation of Concerns

* In this branch we're going to separate all of our code for organizational purposes. 
* We learned about Containers and Components but now we're going to give them their own folders. 
	* In a larger app you might even have sub directories inside of these folders
* Since these are all new files we'll have to export and import them into each other
* Here's an example of importing and exporting in our `HomeContainer` file

```
import React from 'react';
import HomeComponent from '../components/HomeComponent';

class HomeContainer extends React.Component{
	render(){
		return(
			<HomeComponent/>
		)
	}
}

export default HomeContainer;
```
* Import the HomeComponent for use
	* `'../components/HomeComponent'` We can use relative pathing to grab what we want
* Export the const object so the `index.js` file can use it
* Below is how we export our `HomeComponent`

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

export default HomeComponent;
```
* We are exporting our `Stateless Presentational Component` so the HomeContainer can use it
* ***REMEMBER*** this is a component that will NOT HOLD any state or logic. Hence the name `Stateless Presentational Component`
	* `className` - JSX way of identifying a class
	* `const styles` - we created styling for this component that will be applied inside the return
	* The classes applied to these elements are class names from `Materialize CSS`
* `index.js` Now our Index.js File looks like this!!!

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
	* Think about having to build only one `loading animation component` and being able to re-use that in multiple parts/pages on your site. 
* `export default` - is ES6 syntax that will allow us to export the one main function of the file. 
	* This is how we are allowed to import the `HomeComponent` inside of the `HomeContainer` file
* ***STYLING***
	* There are arguments for and against declaring `styles` as a JS object to add to your JSX. 
	* It may look more organized because a React project can break up into many components.
	* However, you will not get the full CSS functionality inside a JS file as you would a normal CSS/SASS file

***Forward onto step 03_state_and_props***

---

## 03 State and Props

* If we keep our logic in one place and the styling in another place how do the two talk to each other?
* `State and Props` - These are the meat and potatoes of React, or if you're vegetarian, lettuce and tomatoes. 
* Your `State` is similar to props but acts as a private object that is only accessible by that component.

##### HomeContainer

* Inside our container we will use a built in function called `getInitialState`
* `getInitialState()` 
	* This is the ES6 way of writing `function getInitialState()`
	* This is a built in React function that must ALWAYS return a Object
	* This object is immutable
		* If `search` was a key in your state you cannot change it in the following manner `this.search = blah`
		* we'll cover how to change the state object in following branches
	* You can pass this whole object or just specific parts to the component being called in components `render()` function
* `handleUserSubmit()` 
	* This is our own function built to handle an event
	* This event listener will be passed down to the component
* Now when we render our `HomeComponent` we'll use JSX syntax to pass in the props. 
* Feel free to stick console logs inside of the components functions any time to make sure your data is correct
	* check out the console.log for "this.state"

##### HomeComponent

* Inside our HomeComponent, along with the styling, we can use the props that were passed in to show on the page.

```
	<h2>The name from our props is {props.name}</h2>
```
* props.name was accessible because inside our `HomeContainer` we rendered the `HomeComponent` like this

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

* `Props` - This represents the data/functions that can be sent to a component. The component can use this data to populate it's JSX Virtual DOM Elements or add event listeners to the Virtual DOM Elements
* `State` - An immutable object of information that represents the data for that container and what is available to be passed down to the sub components
* To change state use the `this.setState` function. We will see and example of this in the following branches
* When to use the word `handle`
	* When creating events the best practice is to use `"handle"` when creating the event listener and `"on"` when passing it as a prop
	* This helps us, and other programmers to understand where the event listener is being created. 
* `event.preventDefault()` is used to prevent the form from reloading

***Enough meat and potatoes, lets go to step 04_ajax_and_axios***

---

## 04 Ajax and Axios

##### Recap for Event Listeners

* Well we didn't come here to just log things in the console
* We learn to grab the user input with our `handleUserSubmit` function and pass it down as a prop called `OnUserSubmit` to our `HomeComponent`.
* Now we're going to start sending requests to the OMDB API

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
* Set up our `endpoints` for the API
	* `endpoints` are the addresses for the data we need to grab from OMDB
* Build the function so that the proper url will be created. 
	* For this well use string concatenation to combine the title, and year with the proper url
* OMDB will send data back to us in JSON format
* We will return that data to the container it is called. 
* At the bottom of the file we export all our helper fuctions.
	* `NOTE:` we continue to break up our code to be small and reusable. Now if this were a larger app we could drop these different helper functions anywhere we want for use

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
	}
```

* We're keeping the console logs for now to make sure we have the users input
* We're setting the user input to a variable that will be passed into the `multiSearch` helper function
* The data that is returned from `multiSearch` will be passed in as `data` inside of the `.then` promise.

***Find out how to use that data in the next step 05_render_movies***

---

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

export default MovieListComponent;
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

---

## 06 Adding Details

##### MovieListComponent

* So far we built a new component called `MovieListComponent`
* The goal of this component was to render a template showing all the movies on the page.
* This component uses classes from the `Materialize CSS` framework to format the movies into cards
* Notice that they aren't clickable and we don't have any detailed movie information
* What about the Synopsis? Release Date? Rating? Directors? Actors and Actresses?
* Now we're going to grab all that information using the other helper function `singleSearch`
* Inside the `MovieListComponent` the function `MovieUI` now calls a new object by the name of `MovieDetailsContainer` and passes "props.data" to it. 

##### MovieDetailsContainer

* Import the singleSearch helper function
* This container will initialize its own state
* Use a lifecycle method called `componentDidMount`
	* This is a method built into react that says "Once this component is mounted run this code block"
	* That code block being the invoking of `this.getSingleMovie` and passing in the props as the arguments
	* We won't cover lifecycle methods in depth in this tutorial but there are many articles/documentation on how to use them
	
***These next steps should sound familiar***

* `getSingleMovie` will take the title and year as arguments and send it to the helper function
* Axios hits the OMDB API and will return back that data in JSON format
* That data is used to update the state of our `MovieDetailsContainer`
* Now that the state has been updated we can send that data as `props` to a `MovieDetailsComponent`

##### MovieDetailsComponent

* Uses a ternary operator to assess if `props.loading` is true. 
* If it is true render some loading images from `Materialize CSS`
* If it is false take the data from `movieInfo` and populate them on the page. 


##### Container Vs. Component 

* Wait we called a container `MovieDetailsContainer` from a component `MovieListComponent`? 
* Yes we did. Remember all of these are just JavaScript Objects
* The reason I made details into another container/component instead of putting it all in one file is the seperation of the axios logic and the presentation of listing out all the data returned

---

## 00 Back To Master!!!

* CONGRATS!!!
* You got through all 6 branches. 
* You may notice there is an extra component file in the master branch that is not in branch 6
* I made a `LoadingComponent` to show as an example of something small and reusable
* It can be imported and dropped anywhere throughout the app
* We can use it as a default loading screen where ever the user might have to wait for data. 
* In the example of the master branch I imported the `LoadingComponent` into the `MovieListComponent` 
* Check out the ternary operator in the return function there

```
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
```
* If the movies are rendering too fast and you want to see the loading sign in action feel free to go into the `MovieListContainer` and set `loading` to false inside of the `this.setState`

---

## Run Forest Run! Going The Extra Mile

#### Take Take This Tutorial a Step Further

* You can find an extension of this tutorial in my new repo here. [https://github.com/Jingo88/Just_Another_React_Tutorial_Extended](https://github.com/Jingo88/Just_Another_React_Tutorial_Extended)
* In this repo I will go about refactoring this projects code to include the React Router. 

#### React Component Life Cycle

* Lifecycle methods help us to control when specific code runs with regards to component
* In our `MovieDetailsComponent` we used a lifecycle method to tell React when to run our Axios helper function
* Check out the docs for more lifecycle methods and how to use them. 
* [https://facebook.github.io/react/docs/react-component.html](https://facebook.github.io/react/docs/react-component.html)

#### React Router

* React Router is a routing library for React. 
* It will help us to jump between multiple React components while syncing with the url
* Check out the docs for more information on how to utilize this awesome library
* [https://github.com/ReactTraining/react-router](https://github.com/ReactTraining/react-router)

#### ReduxJS

* ReactJS is great but things might start to get hectic if you have too many containers all with their own `state` 
* That's where Redux saves the day. It is like the missing limb of React.
* It allows us to put all our state into a `store.js` file that can be accessible by all components
* Check out the docs for more info
* [http://redux.js.org/](http://redux.js.org/)

---
