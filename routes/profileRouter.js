var express = require('express');
var router = express.Router();

const authMiddleware =require("../middlewares/authMiddleware")
var controller=require("../controllers/loginController")

// Profile del usuario
router.get ("", authMiddleware, controller.profile)

module.exports = router