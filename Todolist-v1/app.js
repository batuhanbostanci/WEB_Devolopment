//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  var day = new Date().toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day });
});
app.post("/", function (req, res) {
  res.send("Thanks for posting that.");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
