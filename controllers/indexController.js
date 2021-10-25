const fs = require('fs');
const path = require('path');

/* Productos viene de la base de datos de json */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//requiero las funcionalidades de productos
const funcionesProductos=require("../views/source/funcionesProductos")
let prodOferta=funcionesProductos.productosOfertaFunction(productos); //prodOferta tiene un array de 4 los 4 elementos con mayor oferta


let controller={
    
    index:(req,res)=>{  // vista de la pantalla principal
        res.render("index",{prod:productos, prodOferta:prodOferta}) //
    },

}

module.exports = controller;

