const express = require("express");
const db = require("../config/database");
const Item = require("../models/Item");
const router = express.Router();

//find all gigs
router.get("/", (req, res) => {
  Item.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.json(gigs);
      res.sendStatus(200);
    })
    .catch((err) => console.log("error: " + err));
});

router.post("/add", (req, res) => {
  console.log(req.body.items);
  let data = req.body.items;
  Item.destroy({
    where: {},
    truncate: true,
  });
  const mappedData = data.map((elem, idx) => {
    let nameo = elem.name;
    let quantityo = elem.quantity;
    Item.create({
      id: idx + 1,
      name: nameo,
      quantity: quantityo,
    })
      .then((item) => {
        console.log(item);
      })
      .catch((err) => console.log("error: " + err));
  });
});

module.exports = router;

router.post("/add", (req, res) => {
  console.log(req.body.items);
  let data = req.body.items;
  const mappedData = data.map((elem, idx) => {
    Item.create({});
  });
  Item.drop();

  Item.create(req.body.items)
    .then((item) => {
      console.log(item);
      res.json(data);
    })
    .catch((err) => console.log("error: " + err));
});
