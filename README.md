# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

### More details
Start by setting up your project environment. Make sure Node is installed from the terminal. Install the packages Express, Body-Parser, and Cors from the terminal and them include them your server.js file.
Add a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData.
Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
After your successful retrieval of the weather data, you will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.
Finally, chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request. This function should retrieve data from our app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for:

Temperature
Date
User input

### Technologies
HTML
CSS
JavaScript
node js

Dependencies:
express
cors
body-parser


## Resourses
openweathermap api
Oswald font from Google fonts





<!-- ================================================= -->

## about the project
This project
 is a Weather-Journal App that allow to the user to know about the weather by using the zip code .
this project requires you to create an asynchronous web app that uses Web API "OpenWeather APIs" and user data to dynamically update the UI. 
## project fils details
 the project consists of 
 `server.js` file and the folder `website` that contains  `app.js` and`index.html` for element references , and contains `style.css` to style the application to customized perfection and folder `img` that contains the background image .

 ## Technologies used
Html Css JavaScript Node js



 ## sources used
 ## Api :
 https://openweathermap.org/

 https://expressjs.com/en/starter/hello-world.html

 https://www.npmjs.com/package/body-parser

 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

## backgroungImage :
https://pixabay.com/photos/clouds-cumulus-sky-nature-2329680/



