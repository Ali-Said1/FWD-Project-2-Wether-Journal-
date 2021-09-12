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
const apiKey = "&APPID=fde9547c246ddfd9143ba378e5502b9c&units=metric";

document.getElementById("generate").addEventListener("click", Requesting);

function Requesting() {
  const zipCode = document.getElementById("zip").value;
  getWeather(baseUrl, zipCode, apiKey)
  .then(data => postData('/userData',
  {
  temp: data.main.temp,
  date: data.dt,
  feelings: feelings.value
  }).then(updateUI())
  )
}

const getWeather = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);
  try {
    //transform data to JSON
    const data = await res.json();
    return data;
  } catch (e) {
    //handling the error
    console.log("error", e);
  }
};
  const updateUI = async () => {
    const request = await fetch('/userData')
  try{
  const allData = await request.json();
  document.getElementById('date').innerHTML = `Date: ${new Date(allData.date * 1000)}`;
  document.getElementById('temp').innerHTML = `Temperature: ${allData.temp}`;
  document.getElementById('content').innerHTML = `I feel: ${allData.feelings}`;
  }catch(e){
    console.log('error',e);
  }
  };
