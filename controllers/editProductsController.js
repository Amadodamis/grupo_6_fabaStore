const fs = require('fs');
const path = require('path');

//requiero la base de datos
const db = require('../database/models/');

let controller = {
    edit:(req,res)=>{

        let id=req.params.id;
        db.Product.findByPk(id,{
            include:["marca","tipodeproducto"],
            raw:true,  
            nest:true,     
            })
            .then(producto => {
                res.render('EditProduct.ejs', {producto:producto});
            });
    },
    update:(req,res)=>{
        //productToEdit se busca en la base de datos para obtener la imagen del producto.
        let productToEdit = db.Product.findByPk(req.params.id);

        //conversion de los "si" que llegan en el formulario en valores booleanos.
        if(req.body.ofertaBooleano=="Si"){req.body.ofertaBooleano=true}else{req.body.ofertaBooleano=false}
        if(req.body.stockBooleano=="Si"){req.body.stockBooleano=true}else{req.body.stockBooleano=false}
        
        /*Tipo producto tiene su propia tabla , y el valor que llega del formulario es un string, 
        por lo tanto lo convertimos en un valor que la tabla pueda entender. valor del 1 al 18. Es decir, si tipo producto llega "almacenamiento" estas lineas
        cambian almacenamiento por 1 ya que 1 es el valor de almacenamiento en la base de datos.*/
        let tipoProducto=req.body.tipoProducto;
        if(tipoProducto.charAt(2)==")"){
            tipoProducto=tipoProducto.charAt(0)+tipoProducto.charAt(1);
            tipoProducto=parseInt(10,tipoProducto)
            req.body.tipoProducto=tipoProducto;
        }else{
            tipoProducto=tipoProducto.charAt(0);
            tipoProducto=parseInt(10,tipoProducto);
            req.body.tipoProducto=tipoProducto;
        }

        //edicion del producto
        db.Product.update(
            {
                modelo: req.body.modelo,
                marca: req.body.marca,
                tipoProducto: tipoProducto,
                img: req.file ? req.file.filename : productToEdit.img,
                precio: req.body.precio,
                stock: req.body.stockBooleano,
                stockCant: req.body.stockCant,
                oferta: req.body.ofertaBooleano,
                ofertaPorcentaje: req.body.ofertaPorcentaje,
                especificaciones: req.body.especificaciones
            },
            {
             where: {id: req.params.id}
            })
            .then (() => {
                res.redirect("/")
               })
    },

    delete:(req,res)=>{
         //productToEdit se busca en la base de datos para obtener la imagen del producto.
        let id=req.params.id;
        db.Product.destroy({
            where: {id: req.params.id}
        })
        res.redirect("/products")
    }

}

module.exports = controller;