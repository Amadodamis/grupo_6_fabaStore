var express = require('express');
var router = express.Router();

var controller=require("../controllers/uploadProductsController")


router.get("", controller.upload);

module.exports = router;