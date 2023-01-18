
// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require("body-parser");
const cors = require("cors");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


 // Post Route
const getData = (req, res) => {
  res.send(projectData);
};

app.get("/projectData", getData);

const postData = (req, res) => {
  theData = {
    date: req.body.date,
    temp: req.body.temp,
    feeling : req.body.feeling,
    city: req.body.city,
    description: req.body.description,
  };
  projectData = theData;
  res.status(200).send({
    success: true,
    message: "All good, thanks for visiting :*",
    data: theData,
  });
};

app.post("/projectData", postData);
