const express = require("express");
const router = express.Router();
const moment = require("moment");

const { tbl_orders, tbl_products } = require("../models/index");

router.get("/time", (req, res) => {
  const TIME = {
    o_time: moment().format("HH:mm:ss"),
  };
  res.json({ TIME });
});

router.get("/select", (req, res) => {
  const p_code = req.query.p_code;

  tbl_products
    .findOne({
      where: { p_code },
    })
    .then((result) => {
      res.json({ ORDERS: result });
    });
});

router.post("/order", (req, res) => {
  for (let i = 0; i < req.body.length; i++) {
    if (i != req.body.length - 1) {
      tbl_orders.create(req.body[i]);
    } else {
      tbl_orders.create(req.body[i]).then((result) => {
        res.json(result);
      });
    }
  }
});

module.exports = router;
