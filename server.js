const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
const connectDB = require("./db");
require("dotenv").config();
//variable in .env
const { PORT } = process.env;
//Import Routes
const postRoute = require("./routes/Post");

app.use(bodyParser.json());

connectDB();
/**
 * All Middlewares used
 * in the appication
 */
// initialise express middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.use("/posts", postRoute);

//Routes

app.get("/", function (req, res) {
  res.send("welcome to express");
});

const port = process.env.PORT || PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
