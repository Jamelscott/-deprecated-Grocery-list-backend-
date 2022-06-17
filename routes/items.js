const express = require("express");
const db = require("../config/database");
const Item = require("../models/Item");
const router = express.Router();

//find all gigs
router.get("/", (req, res) => {
  Item.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch((err) => console.log("error: " + err));
});

router.get("/add", (req, res) => {
  const data = { name: "pineapple", quantity: "1" };
  let { name, quantity } = data;
  //Inser into Table
  Item.create({
    name,
    quantity,
  })
    .then((item) => {
      console.log(item);
      res.redirect("/items");
    })
    .catch((err) => console.log("error: " + err));
});

module.exports = router;
