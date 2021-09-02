const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// todo: what is this?
const compression = require("compression");

// todo: do i need process.env.PORT || 3000 ?
// if don't reference port then heroku can not work
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

// todo: what is this?
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// MONGODB_URI - is undefined locally - it exists on heroku 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});