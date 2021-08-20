const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const api = require("./routes/api");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(routes);

app.listen(PORT, function () {
  console.log(`App listening on Port ${PORT}`);
});
