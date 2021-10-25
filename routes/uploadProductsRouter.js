var express = require('express');
var router = express.Router();

var controller=require("../controllers/uploadProductsController")

// Crear un Producto
router.get("", controller.upload);

router.post("",controller.formulario)

module.exports = router;