const express = require('express');
const router = express.Router();
const controller=require("../controllers/uploadProductsController")

//multer
const multer = require ("multer");

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
          cb(null, path.join(__dirname, "../public/img"))
          
    }, 
    //const fileName= file.fieldname+"-"+Date.now()+ path.extname(file.originalname) Este es el fileName por default con date now blabla;

    filename: function (req, file, cb) { 
      const fileName= file.fieldname+"-"+Date.now()+ path.extname(file.originalname)
       cb(null,fileName ) 
    },
  
  })

const uploadFile = multer({ storage });

// Crear un Producto
router.get("", controller.upload);

router.post("",uploadFile.single('img-producto'),controller.formulario)

module.exports = router;