# What is React? 

* React is a JavaScript View Library created by Facebook
* It allows us to write code quickly and in an organized manner

## Virtual DOM

* React utilizes a Virtual DOM. Instead of manipulating the actual DOM we are just playing around with JavaScript Objects that are a representation of that DOM. Once we're done "playing around" with these objects we can render them to the actual DOM. React assesses what needs to be changed in the DOM and will update that tree accordingly and efficiently

## Components

* Components are the JavaScript Objects that will represent the Virtual DOM
* We will break these up into two types of components
	* Container Components 
	* Presentational Components
* Container Components - Hold the logic and state of that component
* Presentational Component - Are stateless and contain the styling of that component
* Components can be kept small
* Components can be imported and exported anywhere within the app
* Therefore they are extremely reusable

