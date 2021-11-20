var express = require('express');
const { login } = require('../controllers/loginController');
var router = express.Router();

var controller=require("../controllers/loginController")

// Profile del usuario
router.get ("", controller.perfil)

module.exports = router