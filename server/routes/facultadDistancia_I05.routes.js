const express = require('express');
const router = express.Router();

const facDistanciaI05Ctrl = require('../controllers/facultadDistancia_I05.controller');


router.get('/', facDistanciaI05Ctrl.getFacDistanciaI05);

module.exports = router;