var express = require('express');
var router = express.Router();

var controller=require("../controllers/loginController")


router.get("", controller.login);

router.post("",controller.formulario)

module.exports = router;