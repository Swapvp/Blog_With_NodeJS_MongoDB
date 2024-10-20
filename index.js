const express = require("express");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
const path = require("path");
app.use(express.static("public"));

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });

app.listen(3001, () => {
  console.log("app started");
});

app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname, "pages/index.html"));
  res.render("index");
});

app.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/about.html"));
  res.render("about");
});
app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/contact.html"));
  res.render("contact");
});
app.get("/post", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/post.html"));
  res.render("post");
});
