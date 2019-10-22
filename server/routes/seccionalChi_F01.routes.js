const express = require('express');
const router = express.Router();

const secChiF01Ctrl = require('../controllers/seccionalChi_F01.controller');


router.get('/', secChiF01Ctrl.getSecChiF01);

module.exports = router;