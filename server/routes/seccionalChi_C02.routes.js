const express = require('express');
const router = express.Router();

const secChiC02Ctrl = require('../controllers/seccionalChi_C02.controller');


router.get('/', secChiC02Ctrl.getSecChiC02);

module.exports = router;