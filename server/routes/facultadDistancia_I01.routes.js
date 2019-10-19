const express = require('express');
const router = express.Router();

const facDistanciaI01Ctrl = require('../controllers/facultadDistancia_I01.controller');

router.get('/', facDistanciaI01Ctrl.getFacDistanciaI01);
router.post('/post', facDistanciaI01Ctrl.postFacDistanciaI01);

module.exports = router;