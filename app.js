//express
const express = require("express");
const app = express();

//logger
const morgan = require("morgan");
//cors
const cors = require("cors");

//require path
const path = require("path");

// Port
const port = process.env.PORT || 3000;

//middleware
app.use(express.static(path.join(__dirname, "client")));
app.use(morgan("dev"));

//index page
app.get("/", (req, res) => {
    res.send("hello word");
  });

//404 page
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));
  });

//port
app.listen(port, () => {
    console.log("listening on 3000");
  });

module.exports = app;