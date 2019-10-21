const express = require('express');
const router = express.Router();

const facDerF03Ctrl = require('../controllers/facultadDer_F03.controller');


router.get('/', facDerF03Ctrl.getFacDerF03);

module.exports = router;