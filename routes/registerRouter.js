var express = require('express');
var router = express.Router();
const multer = require ("multer")
const { check } = require('express-validator');

const validateRegister = [
    check('nombre')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
    check('apellido')
    .notEmpty().withMessage('Debes completar el apellido').bail()
    .isLength({ min: 5 }).withMessage('El apellido debe tener al menos 5 caracteres'),
    check("email")
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes ingresar un email válido'),
    check('clave')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres')
];

var controller=require("../controllers/registerController")

// ****** Configuración de Multer ******* //
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,"../public/img/avatars")
    },
    filename: function (req,file,cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer ({storage})

router.get("", controller.register);

router.post("", upload.single('avatar'), controller.formulario);

router.post('/register', validateRegister, controller.register)


module.exports = router;