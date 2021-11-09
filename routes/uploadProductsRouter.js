const express = require('express');
const router = express.Router();
const path=require('path')
const controller=require("../controllers/uploadProductsController")


//multer
const multer = require ("multer");

const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        let folder= path.join(__dirname, '../public/img')
        cb(null,folder)
          
    }, 
    
    filename: (req, file, cb) =>{
        const fileName= "producto_"+Date.now()+ path.extname(file.originalname);
        cb(null,fileName) 
    },
  
  })

const uploadFile = multer({ storage:storage});

// Crear un Producto
router.get("", controller.upload);

router.post("",uploadFile.single('img-producto'),controller.formulario)

module.exports = router;