//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const moongose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

moongose.connect("mongodb://localhost:27017/userDB");

const userSchema = new moongose.Schema({
  email: String,
  password: String,
});

const User = new moongose.model("User", userSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", async function (req, res) {
  bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
    // Store hash in your password DB.
    const newUser = new User({
      email: req.body.username,
      password: hash,
    });

    try {
      await newUser.save();
      res.render("secrets");
    } catch (err) {
      console.log(err);
    }
  });
});

app.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const foundUser = await User.findOne({ email: username });

    if (foundUser) {
      bcrypt.compare(password, foundUser.password, function (err, result) {
        if (result === true) {
          res.render("secrets");
        }
      });
    } else {
      // Handle invalid credentials or user not found
      res.render("login", { errorMessage: "Invalid username or password" });
    }
  } catch (err) {
    console.error(err);
    // Handle other errors, such as database connection issues
    res.render("error", { errorMessage: "An error occurred" });
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
