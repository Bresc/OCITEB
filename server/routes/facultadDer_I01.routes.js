const express = require('express');
const router = express.Router();

const facDerI01Ctrl = require('../controllers/facultadDer_I01.controller');


router.get('/', facDerI01Ctrl.getFacDerI01);

module.exports = router;