const express = require('express');
const router = express.Router();

const facDistanciaF03Ctrl = require('../controllers/facultadDistancia_F03.controller');


router.get('/', facDistanciaF03Ctrl.getFacDistanciaF03);

module.exports = router;