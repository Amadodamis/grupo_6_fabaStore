const fs = require('fs');
const path = require('path');
const multer = require ("multer")


/* En la constante "productos" ya tienen los productos que están JSON */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
        
        productoNuevo=funcionesProductos.agregarProducto(productoNuevo,file.filename,id,form)
        productoNuevo.precioConOferta=funcionesProductos.precioConOferta(productoNuevo.precio,productoNuevo.ofertaPorcentaje,productoNuevo.oferta);

        console.log(productoNuevo);

        res.redirect("/")
    },
}

module.exports = controller;