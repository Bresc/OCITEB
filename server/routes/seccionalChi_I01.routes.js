const express = require('express');
const router = express.Router();

const secChiI01Ctrl = require('../controllers/seccionalChi_I01.controller');


router.get('/', secChiI01Ctrl.getSecChiI01);

module.exports = router;