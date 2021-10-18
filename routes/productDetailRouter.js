var express = require('express');
var router = express.Router();

var controller=require("../controllers/productDetailController")


router.get("/:id", controller.productDetail);


module.exports = router;