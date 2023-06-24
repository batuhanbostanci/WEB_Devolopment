//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let day = new Date().toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  console.log(req.body);
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItem: workItems });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
