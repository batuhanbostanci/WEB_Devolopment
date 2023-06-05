const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: tacko@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("This is going to be learning path of me ");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Code</li><li>Coffe</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started port 3000");
});
