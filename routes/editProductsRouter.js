var express = require('express');
var router = express.Router();

var controller=require("../controllers/editProductsController")

// Editar un Producto
router.get("/:id",controller.edit);
router.put("/:id",controller.update);

// Eliminar un Producto
router.delete("/delete/:id",controller.delete)

module.exports = router;