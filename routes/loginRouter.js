var express = require('express');
const { login } = require('../controllers/loginController');

var router = express.Router();
const guestMiddleware = require ("../middlewares/guestMiddleware")

var controller=require("../controllers/loginController")

// Formulario de login
router.get("", guestMiddleware, controller.login);

// Proceso de Formulario de login
router.post("", controller.procesoLogin);

// Formulario de logout
router.get("/logout", controller.logout);

router.get("/profile", controller.profile)

module.exports = router;