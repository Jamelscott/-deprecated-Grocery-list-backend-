require("dotenv").config();
const express = require("express");
const body = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3030;
const app = express();
const db = require("./config/database.js");

//Database
const { Sequelize } = require("sequelize");

// // Option 3: Passing parameters separately (other dialects)
// const db = new Sequelize("grocery", "jamelscott", "jjbean", {
//   host: "localhost",
//   dialect: "postgres",
// });

//Test database
db.authenticate()
  .then(() => console.log("Server is connected..."))
  .catch((err) => console.log("Error: " + err));

app.get("/", (req, res) => {
  res.send("INDEX");
});

//Item routes
app.use("/items", require("./routes/items"));

app.listen(PORT, console.log(`server running on PORT ${PORT}`));
