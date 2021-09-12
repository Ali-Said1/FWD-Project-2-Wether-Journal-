# FWD Project 2 Wether Journal
FWD Project 2 (Wether Journal app)
---

### Description

The project gets data from the weather api provided by [Open Weather Map](https://openweathermap.org/)

then it processes the data and sends it with the user feelings to the server using `POST` request 

```
app.post('/userData', (req, res) => {
    projectData.push(req.body);
});
```

Again it sends a `GET` request to get the data stored in the array `projectData`, and prints it to the screen where the user can see all the provided data.

### Requirements

There is no specific requirements all the node packages are included within **node_modules** folder.

### How to use 

Navigate to the folder in the terminal, then you should run the server in a node environment using the command 
```
node server.js
```
the server will run on the localhost on port 3030 you can access it through this [link](https://localhost:3030).
### author 
***Ali Said***
