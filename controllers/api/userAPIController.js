const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const User = db.User;


const userAPIController = {
    'list': (req, res) => {
        db.User.findAll({
            raw:true,  
            nest:true,
        })
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/:id',
                        urlFoto: '../../img/avatars/default.jpg'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    }
}

module.exports = userAPIController;