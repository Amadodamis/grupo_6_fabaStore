var express = require('express');
var router = express.Router();
const multer = require('multer')

var controller=require("../controllers/editProductsController")

// configuracion de multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/img")
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({storage})


// Editar un Producto
router.get("/:id",controller.edit);
router.put("/:id",upload.single('avatar'),controller.update);

// Eliminar un Producto
router.delete("/delete/:id",controller.delete)

module.exports = router;