var express = require('express');
var router = express.Router();

var controller=require("../controllers/editProductsController")

// Editar un Producto
router.get("/:id",controller.edit);
//router.put("/editProduct",controller.edit);

module.exports = router;