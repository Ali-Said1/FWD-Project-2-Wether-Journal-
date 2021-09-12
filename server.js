// Setup empty JS object to act as endpoint for all routes
const projectData = {};
let dataIncrementer = 1;

// Require Express to run server and routes
    const express = require('express');
// Start up an instance of app
    const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
    const cors = require('cors');
    app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3030;

//making the server and assigning callback function as an arrow function
const server = app.listen(port, () => console.log(`Server working on port ${port}`));


// Post to add data to the projectData object

app.post('/userData', (req, res) => {
    let data = req.body;
    console.log("server side Data: ", data);

    //  getting date
    projectData["date"] = data.date;
    //  getting temperature
    projectData["temp"] = data.temp;
    //  getting feelings
    projectData["feelings"] = data.feelings;

});

app.get('/userData', sendBack);

function sendBack(req, res) {
    //sends project data on get request
    res.send(projectData);
};