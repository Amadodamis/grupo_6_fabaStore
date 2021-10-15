var express = require('express');
var router = express.Router();

var controller=require("../controllers/registerController")


router.get("", controller.register);

router.post("",controller.formulario)

module.exports = router;