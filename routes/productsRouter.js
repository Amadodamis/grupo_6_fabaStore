var express = require('express');
var router = express.Router();

var productsController =require("../controllers/productsController")

// Devolver todos los productos
router.get("/", productsController.index);

router.get("/categories/", productsController.productsByCategory);

module.exports = router;