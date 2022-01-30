const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de películas
router.get('/', productsAPIController.list);
//Detalle de una película
router.get('/:id', productsAPIController.detail);

module.exports = router;