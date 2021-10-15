var express = require('express');
var router = express.Router();

var controller=require("../controllers/productDetailController")


router.get("", controller.productDetail);

module.exports = router;