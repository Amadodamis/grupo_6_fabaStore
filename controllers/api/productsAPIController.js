const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Product = db.Product;

function CountByCategory(productos,categoria) {
    
    let contador=0;
    productos.forEach(producto => {
        if(producto.tipodeproducto.tipo_de_producto==categoria){
            contador=contador+1
            
        }
        
    });
    
    return contador
}

const productsAPIController = {
    'list': (req, res) => {
        db.Product.findAll({
            include: ["marca","tipodeproducto"],
            raw:true,  
            nest:true,
        })
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url : 'api/products',
                    cantCategorias:18,
                    CountCategory:{
                        Almacenamiento:CountByCategory(products,"Almacenamiento"),
                        Auriculares:CountByCategory(products,"Auriculares"),
                        Cables:CountByCategory(products,"Cables"),
                        Coolers:CountByCategory(products,"Coolers"),
                        Fuentes:CountByCategory(products,"Fuentes de poder"),
                        Gabinetes:CountByCategory(products,"Gabinetes"),
                        MemoriasRam:CountByCategory(products,"Memorias ram"),
                        Microfonos:CountByCategory(products,"Microfonos"),
                        Microprocesadores:CountByCategory(products,"Microprocesadores"),
                        MonitoresYtelevisores:CountByCategory(products,"Monitores y televisores"),
                        Motherboards:CountByCategory(products,"Motherboards"),
                        Mouses:CountByCategory(products,"Mouses"),
                        Notebooks:CountByCategory(products,"Notebooks"),
                        Parlantes:CountByCategory(products,"Parlantes"),
                        PlacasDeVideo:CountByCategory(products,"Placas de video"),
                        SillasGamer:CountByCategory(products,"Sillas gamer"),
                        Teclados:CountByCategory(products,"Teclados"),
                        Webcams:CountByCategory(products,"Webcams"),
                    }
                },
                products,
            
        }
            res.json(respuesta);
        })
    },
    
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: ["marca","tipodeproducto"],
            raw:true,  
            nest:true,
        })
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/'+product.id
                    },
                    product
                }
                res.json(respuesta);
            });
    }
}

module.exports = productsAPIController;