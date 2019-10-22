const express = require('express');
const router = express.Router();

const secChiF03Ctrl = require('../controllers/seccionalChi_F03.controller');


router.get('/', secChiF03Ctrl.getSecChiF03);

module.exports = router;