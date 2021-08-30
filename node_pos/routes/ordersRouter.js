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

module.exports = router;
