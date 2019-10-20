const express = require('express');
const router = express.Router();

const facDistanciaC01Ctrl = require('../controllers/facultadDistancia_C01.controller');


router.get('/', facDistanciaC01Ctrl.getFacDistanciaC01);

module.exports = router;