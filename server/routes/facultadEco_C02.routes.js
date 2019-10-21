const express = require('express');
const router = express.Router();

const facEcoC02Ctrl = require('../controllers/facultadEco_C02.controller');


router.get('/', facEcoC02Ctrl.getFacEcoC02);

module.exports = router;