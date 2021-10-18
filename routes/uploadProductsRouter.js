var express = require('express');
var router = express.Router();

var controller=require("../controllers/uploadProductsController")


router.get("", controller.upload);
router.post("",controller.formulario)

router.get("/editProduct/:productoId",controller.edit);
//router.put("/editProduct",controller.edit);

module.exports = router;