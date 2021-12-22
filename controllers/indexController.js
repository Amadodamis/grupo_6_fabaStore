const fs = require('fs'); const path = require('path');

/* Productos viene de la base de datos de json */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//requiero la base de datos
const db = require('../database/models/');

//requiero las funcionalidades de productos
const funcionesProductos=require("../views/source/funcionesProductos")

let controller={
    
    index:(req,res)=>{  // vista de la pantalla principal
        let prodOferta;  
        db.Product.findAll(
            {raw:true,     //raw true sirve para obtener solo el datavalues **********NO SACAR IMPORTANTISIMO*********
            })  
            .then(prod => {  
                console.log(prod)
                prodOferta = funcionesProductos.productosOfertaFunction(prod); // prodOferta tiene un array de los 4 elementos con mayor oferta de la base de datos
                
                prodOferta=funcionesProductos.precioConOferta(prodOferta)  // prodOferta actualiza los precios de las ofertas.
                
                res.render("index",{prod, prodOferta})
            })
            
    },

}

module.exports = controller;

