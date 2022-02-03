const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Product = db.Product;


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
                    total: products.length
                },
                data: {
                    products,
                    detail : 'api/products'
            }
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
                        url: '/api/products/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    }
}

module.exports = productsAPIController;