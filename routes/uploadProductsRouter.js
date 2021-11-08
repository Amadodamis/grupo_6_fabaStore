const express = require('express');
const router = express.Router();
const controller=require("../controllers/uploadProductsController")

//multer
const multer = require ("multer");

const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        let folder= path.join(__dirname, '../public/img')
        cb(null,folder)
          
    }, 
    //const fileName= file.fieldname+"-"+Date.now()+ path.extname(file.originalname) Este es el fileName por default con date now blabla;

    filename: (req, file, cb) => { 
        const fileName= "AAAAASesubio"+ path.extname(file.originalname);
        cb(null,fileName) 
    },
  
  })

const uploadFile = multer({ storage:storage});

// Crear un Producto
router.get("", controller.upload);

router.post("",uploadFile.single('img-producto'),controller.formulario)

module.exports = router;