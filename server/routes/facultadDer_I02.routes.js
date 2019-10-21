const express = require('express');
const router = express.Router();

const facDerI02Ctrl = require('../controllers/facultadDer_I02.controller');


router.get('/', facDerI02Ctrl.getFacDerI02);

module.exports = router;