//terminada

const fs = require('fs'); const path = require('path');

//requiero la base de datos
const db = require('../database/models/');

//requiero las funcionalidades de productos
const funcionesProductos=require("../views/source/funcionesProductos")

let controller={
    // vista de la pantalla principal
    index:(req,res)=>{  
        let prodOferta;  
        db.Product.findAll(
            {
            include:["marca"],
            raw:true,  
            nest:true,     
            })  
            .then(prod => {  
                // prodOferta tiene un array de los 4 elementos con mayor oferta de la base de datos
                prodOferta = funcionesProductos.productosOfertaFunction(prod);

                // prodOferta actualiza los precios de las ofertas.
                prodOferta=funcionesProductos.precioConOferta(prodOferta)  
                res.render("index",{prod, prodOferta})
            })
            .catch(e=>{
                console.log(e)
            })
            
    },

}

module.exports = controller;

