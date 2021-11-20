var express = require('express');
const { login } = require('../controllers/loginController');
var router = express.Router();
const authMiddleware =require("../middlewares/authMiddleware")

var controller=require("../controllers/loginController")

// Profile del usuario
router.get ("", authMiddleware, controller.perfil)

module.exports = router