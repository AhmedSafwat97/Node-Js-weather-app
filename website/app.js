// /* Global Variables */
// Personal API Key for OpenWeatherMap API
const api_key = "9e80d25a6c607cbd7b00e09f3779a3b9";
const base_url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

/* create Function called by event listener */
const Generate = () => {
  const zip = document.getElementById("zip").value;
  const url = `${base_url}&zip=${zip}&APPID=${api_key}`;
  let feelings = document.getElementById("feelings").value;

  console.log(feelings)

  // create a condition that message the user when the field is empty  
  if (zip.length === 0 || feelings.length === 0) {
    alert("Please fill up all fields !");
    return
  }

  getWeather(url).then((data) => {
    postData("/projectData", {
      date: newDate,
      temp: Math.round(data.list[0].main.temp),
      feeling: feelings,
      city: data.city.name,
      description: data.list[0].weather[0].description,
    }).then(updateUI("/projectData"));
  });
};

const button = document.getElementById("generate");

// Event listener to add function to existing HTML DOM element
button.addEventListener("click", Generate);

/* create Function to GET Web API Data*/

const getWeather = async (url) => {
  const res = await fetch(url);
  if (res.status === 404 || res.status === 400) {
    document.getElementById("content").innerHTML =
      "Please write a valid zip code!";
  }
  try {
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};


/* create Function to POST data */
const postData = async (url = "", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  try {
    const newData = await res.json();
    console.log(newData);
    return newData;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};


const updateUI = async (url) => {
  const request = await fetch(url);
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = `${allData.date}`;
    document.getElementById(
      "temp"
    ).innerHTML = `${allData.temp} C°`;
    document.getElementById(
      "content"
    ).innerHTML = `${allData.feeling}`;
    document.getElementById("city").innerHTML = `${allData.city}`;
    document.getElementById(
      "description"
    ).innerHTML = `${allData.description}`;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};


