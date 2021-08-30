var express = require("express");
var router = express.Router();
const moment = require("moment");

const { tbl_products } = require("../models/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  const DATE = {
    o_date: moment().format("YYYY[-]MM[-]DD"),
  };

  tbl_products.findAndCountAll().then((result) => {
    res.render("index", { PRODUCT: result.rows, DATE });
  });
});

module.exports = router;
