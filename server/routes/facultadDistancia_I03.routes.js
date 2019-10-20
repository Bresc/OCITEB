const express = require('express');
const router = express.Router();

const facDistanciaI03Ctrl = require('../controllers/facultadDistancia_I03.controller');


router.get('/', facDistanciaI03Ctrl.getFacDistanciaI03);

module.exports = router;