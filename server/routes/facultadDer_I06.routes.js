const express = require('express');
const router = express.Router();

const facDerI06Ctrl = require('../controllers/facultadDer_I06.controller');


router.get('/', facDerI06Ctrl.getFacDerI06);

module.exports = router;