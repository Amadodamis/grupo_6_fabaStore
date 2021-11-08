const fs = require('fs');
const path = require('path');
const multer = require ("multer")

/* En la constante "productos" ya tienen los productos que están JSON */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//


let controller = {
    upload: (req,res)=>{
        res.render("uploadProducts",{productos:productos})
    },
    formulario: (req,res)=>{
        res.send("El archivo se subio") 
        //res.redirect("/")
    },
}

module.exports = controller;