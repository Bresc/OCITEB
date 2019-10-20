const express = require('express');
const router = express.Router();

const facDistanciaI06Ctrl = require('../controllers/facultadDistancia_I06.controller');


router.get('/', facDistanciaI06Ctrl.getFacDistanciaI06);

module.exports = router;