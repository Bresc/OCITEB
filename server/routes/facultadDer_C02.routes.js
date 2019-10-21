const express = require('express');
const router = express.Router();

const facDerC02Ctrl = require('../controllers/facultadDer_C02.controller');


router.get('/', facDerC02Ctrl.getFacDerC02);

module.exports = router;