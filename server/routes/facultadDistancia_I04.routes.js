const express = require('express');
const router = express.Router();

const facDistanciaI04Ctrl = require('../controllers/facultadDistancia_I04.controller');


router.get('/', facDistanciaI04Ctrl.getFacDistanciaI04);

module.exports = router;