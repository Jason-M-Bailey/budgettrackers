const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// todo: what is this?
const compression = require("compression");

// todo: do i need process.env.PORT || 3000 ?
const PORT = 3000;

const app = express();

app.use(logger("dev"));

// todo: what is this?
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});