const fs = require('fs');
const path = require('path');
const multer = require ("multer")

//requiero la base de datos
const db = require('../database/models/');

//requiero las funcionalidades de productos
const funcionesProductos=require("../views/source/funcionesProductos")


let controller = {
    upload: (req,res)=>{
        if (req.session.userLogged==undefined){
            res.redirect("/products")
        }else{
            if(req.session.userLogged.id_categoria==1){
                res.render("uploadProducts")
            }else{
                res.redirect("/products")
            }
        }
    },

    formulario: (req,res)=>{
        //requiero los datos de la foto que cargue desde el navegador.
        let file=req.file;let oferta;

        //conversion del "si" en booleano de la oferta y asignacion del precio con el descuento.
        if(req.body.ofertaBooleano=="Si")
            {req.body.ofertaBooleano=true;
             oferta=funcionesProductos.precioConOfertaIndividual(req.body.ofertaPorcentaje,req.body.precio)}
        else{
            req.body.ofertaBooleano=false
            oferta=0;}

        //conversion del "si" en booleano del stock
        if(req.body.stockBooleano=="Si"){req.body.stockBooleano=true}
        else{req.body.stockBooleano=false;req.body.stockCant=0}

        /*Tipo producto tiene su propia tabla , y el valor que llega del formulario es un string, 
        por lo tanto lo convertimos en un valor que la tabla pueda entender. valor del 1 al 18. Es decir, si tipo producto llega "almacenamiento" estas lineas
        cambian almacenamiento por 1 ya que 1 es el valor de almacenamiento en la base de datos.*/
        let tipoProducto=req.body.tipoProducto;
           
        if(tipoProducto.charAt(2)==")"){
            tipoProducto=tipoProducto.charAt(0)+tipoProducto.charAt(1);
            tipoProducto=parseInt(tipoProducto,10)
   
            req.body.tipoProducto=tipoProducto;
        }else{
            tipoProducto=tipoProducto.charAt(0);
            tipoProducto=parseInt(tipoProducto,10);
            req.body.tipoProducto=tipoProducto;
        }
        
        /*Marca tiene su propia tabla , y el valor que llega del formulario es un string, 
        por lo tanto lo convertimos en un valor que la tabla pueda entender. valor del 1 al 28. Es decir, si tipo producto llega "Logitech" estas lineas
        cambian almacenamiento por 1 ya que 1 es el valor de Logitech en la base de datos.*/
        let marca=req.body.marca;
        if(marca.charAt(2)==")"){
            marca=marca.charAt(0)+marca.charAt(1);
            marca=parseInt(marca,10)
            req.body.marca=marca;
        }else{
            marca=marca.charAt(0);
            marca=parseInt(marca,10);
            req.body.marca=marca;
        }

        //Creacion del producto 
        db.Product.create({
            modelo:req.body.modelo,
            id_marca:req.body.marca,
            id_tipoProducto:req.body.tipoProducto,
            img:file.filename,
            precio:req.body.precio,
            stock:req.body.stockBooleano,
            stockCant:req.body.stockCant,
            oferta:req.body.ofertaBooleano,
            precioConOferta:oferta,
            ofertaPorcentaje:req.body.ofertaPorcentaje,

            especificaciones: req.body.especificaciones
           })
           .then (() => {
            res.redirect("/products")
           })
           .catch(e=>{
            console.log(e)
        })
        
    }
}

module.exports = controller;