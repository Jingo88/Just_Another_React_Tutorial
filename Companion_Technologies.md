# Other Companion Technologies

---

## OMDB API

* This is a free API that does not require a key
* It will return information in JSON format
* The endpoints to this API are
	* Single Movie Search: "http://www.omdbapi.com/?t="
	* Multiple Movie Search: "http://www.omdbapi.com/?s="
* You can read the documentation here [http://omdbapi.com/](http://omdbapi.com/)
* `NOTE` - IMDB does not allow people to take their movie images so keep that in mind if you are trying to utilize OMDB to host an actual movie app to show others.

---

## Webpack

* We use this to bundle all of our different files. 
* When you run `npm start` you are actually starting the "webpack-dev-server" which will take care of everything for us.
* It will target the `webpack.config.js` file utilize the input and output that you specified
* If you were to build your own full stack application you will need to set up your server to read the `webpack.config.js` file.
* Check out the docs here: [https://webpack.github.io/](https://webpack.github.io/)

---

## ES6 / ES2015

* This is the newest version of JavaScript
* Please read the [ES6 Syntax Markdown](https://github.com/Jingo88/Just_Another_React_Tutorial/blob/master/ES6_Syntax.md) if you are not familiar with the syntax and want to better understand this tutorial.

---

## JSX

* From [http://buildwithreact.com/tutorial/jsx](http://buildwithreact.com/tutorial/jsx)
	* JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant.
* As you go through this tutorial you will see something similar to HTML syntax inside of our JavaScript Objects render and return statements. This is JSX

---

## Babel

* Use this to transform our ES6 and JSX to JavaScript
* In the `app` folder you'll see a `.babelrc` file
* In this file we are stating that this app is built using `react` and `es2015`

---

## Axios

* A promise based http client. Make XMLHttpRequests
* We're using this to send requests to OMDB and grab the response
* Check out the docs here: [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

---

## Node

* Node - A runtime environment for JavaScript. 
	* From [https://nodejs.org/en/](https://nodejs.org/en/)

```
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
```
* npm - the package manager for node modules
