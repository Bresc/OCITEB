const express = require('express');
const router = express.Router();

const facDistanciaI02Ctrl = require('../controllers/facultadDistancia_I02.controller');


router.get('/', facDistanciaI02Ctrl.getFacDistanciaI02);

module.exports = router;