const express = require('express');
const router = express.Router();

const secChiC01Ctrl = require('../controllers/seccionalChi_C01.controller');


router.get('/', secChiC01Ctrl.getSecChiC01);

module.exports = router;