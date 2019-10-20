const express = require('express');
const router = express.Router();

const facDistanciaC02Ctrl = require('../controllers/facultadDistancia_C02.controller');


router.get('/', facDistanciaC02Ctrl.getFacDistanciaC02);

module.exports = router;