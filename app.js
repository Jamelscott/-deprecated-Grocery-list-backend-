require("dotenv").config();
const express = require("express");
var cors = require("cors");
const body = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3030;
const app = express();
const db = require("./config/database.js");

//Database
const { Sequelize } = require("sequelize");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

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
