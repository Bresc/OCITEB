const express = require('express');
const router = express.Router();

const facDerI05Ctrl = require('../controllers/facultadDer_I05.controller');


router.get('/', facDerI05Ctrl.getFacDerI05);

module.exports = router;