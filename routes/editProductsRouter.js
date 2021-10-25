var express = require('express');
var router = express.Router();

var controller=require("../controllers/editProductsController")

// Editar un Producto
router.get("/:id",controller.edit);
//router.put("/",controller.edit);

module.exports = router;