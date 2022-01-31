const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userAPIController');

//Rutas
//Listado de películas
router.get('/', userAPIController.list);
//Detalle de una película
router.get('/:id', userAPIController.detail);

module.exports = router;