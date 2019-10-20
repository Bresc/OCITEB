const express = require('express');
const router = express.Router();

const facAgroC02Ctrl = require('../controllers/facultadAgro_C02.controller');


router.get('/', facAgroC02Ctrl.getFacAgroC02);

module.exports = router;