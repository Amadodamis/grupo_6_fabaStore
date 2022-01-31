var express=require("express");
var router = express.Router();

var controller=require("../controllers/productCartController");


router.get("/", controller.productCart);

router.post("/", controller.productCart);


module.exports = router;