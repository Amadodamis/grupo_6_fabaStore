const fs = require('fs');
const path = require('path');

/* En la constante "productos" ya tienen los productos que están JSON */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller={
    
    index:(req,res)=>{  // vista de la pantalla principal
        res.render("products",{
            prod:productos}) //
    },
    
}

module.exports = controller;