/* Global Variables */

const feelings = document.getElementById("feelings");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const content = document.getElementById("content");


// making postRequest

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // matching body data to the Content-Type
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (e) {
    console.log("error", e);
  }
};

//the base url value
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
//My api key to retrieve data
const apiKey = "&APPID=fde9547c246ddfd9143ba378e5502b9c";

document.getElementById("generate").addEventListener("click", Requesting);

function Requesting() {
  const zipCode = document.getElementById("zip").value;
  getWeather(baseUrl, zipCode, apiKey);


}

const getWeather = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);
  try {
    //transform data to JSON
    const data = await res.json();
    console.log(data);
    //setting the date value
    const d = data.dt;

    // setting temperature value
    const temperature = parseFloat(data.main.temp) - 273.15;

    postData("/userData", { temperature, d, feelings: feelings.value });
    getuserData();

  } catch (e) {
    //handling the error
    console.log("error", e);
  }
};
const getuserData = async () => {
  const res = await fetch('/userData');
  try {
    //transform data to JSON
    const retrievedData = await res.json();
    //add Retrieved data to the divs
    //date div

    date.textContent = `Date: ${new Date(retrievedData.d * 1000)}`;
    //Temp div
    temp.textContent = `Temperature: ${retrievedData.temperature.toFixed(2)}`;
    //feelings div
    content.textContent = retrievedData.feelings;
    //handling the error
  } catch (e) {
    console.log("error", e);
  }
};
