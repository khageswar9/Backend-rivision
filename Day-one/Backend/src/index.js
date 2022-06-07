const express = require("express");
const moviescontroller = require("./controllers/movie.controllers");
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use("/movies",moviescontroller);

module.exports = app;