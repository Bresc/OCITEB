const express = require('express');
const router = express.Router();

const facDerF01Ctrl = require('../controllers/facultadDer_F01.controller');


router.get('/', facDerF01Ctrl.getFacDerF01);

module.exports = router;