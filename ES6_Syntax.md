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

