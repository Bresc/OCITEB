const express = require('express');
const router = express.Router();

const facDerC01Ctrl = require('../controllers/facultadDer_C01.controller');


router.get('/', facDerC01Ctrl.getFacDerC01);

module.exports = router;