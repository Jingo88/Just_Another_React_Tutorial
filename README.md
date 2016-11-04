# Just Another React Tutorial

### What is React?

* React is a JavaScript Library created by Facebook
* Write organized code
* Write code quickly
* Utilizes components
* Virtual DOM efficiency

---

### What We're Building

* In this tutorial we'll be building a web app that will search for movies
* We'll be using the OMDB API
* Clone this repo onto your computer
* Then grab all the dependencies using:

---

### Other Companion Technologies

* OMDB API - I picked this because it is a free api that does not require a key. However, IMDB does not allow people to take their images so keep that in mind if you are trying to utilize OMDB for hosting an actual movie app
* Webpack - We use this to bundle our modules. When you run `npm start` you are actually starting the "webpack-dev-server" which will take care of everything for us. If you were to build your own full stack application you will need to build a `webpack.config.js` file and hook it up to your server. 
* ES6 - The newest version of JavaScript. Also known as `es2015`
* JSX - A preprocessor that allows us to write XML syntax inside of our JavaScript files. Since we are using a Virtual DOM JSX makes it look as close to writing HTML as possible.
* Axios - A promise based http client. Make XMLHttpRequests.
* Node - A runtime environment for JavaScript. 
	* From [https://nodejs.org/en/](https://nodejs.org/en/)

```
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
```
* npm - the package manager for node modules

---

### 00 The Master Branch

```
npm install
```
* This command is a node command that will download all the node modules listed in the `package.json` file
* If you don't have npm then... you should probably download yourself npm
* Now let's run the server

```
npm start
```
* Now open up your browser and visit `localhost:8080`
* This is our end goal. Or as far as this tutorial will take you. Hopefully you can rebuild this into your own apps and incorporate newer concepts. I'll suggests some later on. 

### 01 The Set Up

* 




##### Things to write about

* What is React
* How is it different from other frameworks
* What are the technologies listed above
* A step by step tutorial on what we are building
* Always start with set up structure
* Then build your shit with hello world
* Include luxury goals, what to learn next
	* react router
	* actually hosting it on your own express server
	
##### Clone this Repo

##### NPM Install yo shit

##### Take a look at the file structure

* webpack.config.js
	* Webpack input and output
* index.html
	* script tag targets dist/index_bundle.js	
* .babelrc
	* used to convert react and es6 	
* package.json


##### Where do these fit

* Component life cycle
* Virtual DOM
* State to props


##### Steps

* Branch 1 - The Set Up (includes Hello World)
* Branch 2 - Containers vs Components (build out the interface)
* Branch 3 - State and Props and Event listeners
* Branch 4 - Final touches
* Maybe show the idea of container components all in the index.js file?
* Then make a new branch breaking all that up?
* then make a new branch making the axios calls?