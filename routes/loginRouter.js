var express = require('express');
const { login } = require('../controllers/loginController');
var router = express.Router();
const guestMiddleware = require ("../middlewares/guestMiddleware")

var controller=require("../controllers/loginController")

// Formulario de login
router.get("", guestMiddleware, controller.login);

// Proceso de Formulario de login
router.post("", controller.procesoLogin);

router.post("",controller.formulario)

module.exports = router;