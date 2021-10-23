const fs = require('fs');
const path = require('path');

/* En la constante "productos" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales). Por ahora estábamos tomando
los productos de la variable "productos" que está en JS, vamos a tener que empezar a utilizar la variable
productos que está en la base de datos JSON de ahora en más me parece, para poder guardar lonuevos productos creados */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/* let productos=require("../views/source/products");*/

let controller={

    productDetail:(req,res)=>{
        let id=req.params.id;
        const producto = productos.find(producto =>{
            return producto.id == id
        })

        res.render("productDetail",{
            producto: producto
        })
    },
}

module.exports = controller;