var express = require('express');
var router = express.Router();

var productsController =require("../controllers/productsController")

// Devolver todos los productos
router.get("/", productsController.index);

module.exports = router;