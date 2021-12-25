const fs = require('fs');
const path = require('path');
const multer = require ("multer")


/* En la constante "productos" ya tienen los productos que están JSON */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//requiero la base de datos
const db = require('../database/models/');

//requiero las funcionalidades de productos
const funcionesProductos=require("../views/source/funcionesProductos")

let tipoProducto={
id: "",
modelo:"",
marca:"",
tipoProducto:"",
img:"",
precio:"",
stock:"",
stockCant:"",
oferta:"",
ofertaPorcentaje:"",
precioConOferta:"",
cuotasSinInteres:"",
cantCuotas: "",
interescuota: "",
precioEnCuotas: "",
especificaciones:""
}


let controller = {
    upload: (req,res)=>{
        res.render("uploadProducts"/*,{productos:productos}*/)
    },
    formulario: (req,res)=>{
        
        //requiero la informacion del formulario y la guardo en form
        let form=req.body;

        //requiero los datos de la foto que cargue desde el navegador.
        let file=req.file;

        //Guardo el valor del ultimo numero de producto
        let id=productos.length+1;

        //especifico el tipo de dato que va a ser
        let productoNuevo=tipoProducto;

        //Se completan los campos
        productoNuevo=funcionesProductos.agregarProducto(productoNuevo,file.filename,id,form)
        productoNuevo.precioConOferta=funcionesProductos.precioConOferta(productoNuevo.precio,productoNuevo.ofertaPorcentaje,productoNuevo.oferta);

        productos.push(productoNuevo);
        let productosJson=JSON.stringify(productos,null,"\t");
        fs.writeFileSync(productsFilePath,productosJson)

        res.redirect("/")
    }
    /*formulario: (req,res)=>{
        db.Product.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            id: req.body.id,
            modelo:req.body.modelo,
            marca: req.body.marca,
            tipoProducto:req.body.tipoProducto,
            img:req.file.img,
            precio:req.body.precio,
            stock:req.body.stock,
            stockCant:req.body.stockCant,
            oferta:req.body.oferta,
            ofertaPorcentaje:req.body.ofertaPorcentaje,
            precioConOferta:req.body.precioConOferta,
            cuotasSinInteres: req.body.cuotasSinInteres,
            cantCuotas: req.body.cantCuotas,
            interescuota: req.body.interescuota,
            precioEnCuotas: req.body.precioEnCuotas,
            especificaciones: req.body.especificaciones
           })
           .then (() => {
            res.redirect("/products")
           })*/
}

module.exports = controller;