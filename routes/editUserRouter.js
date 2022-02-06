var express = require('express');
var router = express.Router();
const multer = require('multer')

var controller=require("../controllers/editUserController")
const authMiddlewareEditUser = require ("../middlewares/authMiddlewareEditUser")

// configuracion de multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/img/avatars")
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({storage})


// Editar un usuario
router.get("/:id",authMiddlewareEditUser,controller.edit);

router.put("/:id",upload.single('avatar'),controller.update);

// Eliminar un usuario
router.delete("/delete/:id",controller.delete)

router.delete("/giveadmin/:id", controller.giveAdmin)

router.delete("/removeadmin/:id", controller.removeAdmin)

module.exports = router;