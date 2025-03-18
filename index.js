const express = require("express");
const dbconnection = require("./dbconnection");
const  route  = require("./route");
const app = express();
const port = 3000;

// Middleware
app.use(express.json()),

require("dotenv").config()
dbconnection();
app.use(route)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`BackEnd is running ${port}`);
});
