const express = require("express");

const https = require("https");

const app = express();

app.get("/", function (req, res) {

  https.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=371cb1f97fd1904579cde52938d6080b", function (response) {
    console.log(response.statusCode);


  res.send("Server is running");
});




app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
