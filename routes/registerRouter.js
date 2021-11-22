var express = require('express');
var router = express.Router();

const path=require('path')
const multer = require ("multer")

const guestMiddleware = require ("../middlewares/guestMiddleware")

//validate de los campos del registro
const validateRegister = require("../routes/funcionesYprocesos/validate");

var controller=require("../controllers/registerController")

// ****** Configuración de Multer ******* //
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/avatars"))
    },
    filename: function (req,file,cb) {
        const fileName= file.fieldname+"-"+Date.now()+ path.extname(file.originalname)
        cb(null,fileName ) 
    }
})

const upload = multer ({storage})

// Crear un Usuario
router.get("", guestMiddleware, controller.register);

// Cargar el usuario por formulario a la base de datos JSON y la validacion
router.post("", upload.single('avatar'),validateRegister, controller.formulario);

// Editar un Usuario (esto tiene que estar una vez que agreguemos la vista del usuario - podríamos agregarlo ahí mismo)
/* router.put("/register/:id",upload.single('avatar'),controller.update);*/

// Eliminar un Usuario (una vez creada la vista del usuario, podríamos crear la funcionalidad para eliminar un usuario)
/* router.delete("/register/delete/:id",controller.delete) */


module.exports = router;