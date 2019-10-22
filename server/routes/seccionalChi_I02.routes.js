const express = require('express');
const router = express.Router();

const secChiI02Ctrl = require('../controllers/seccionalChi_I02.controller');


router.get('/', secChiI02Ctrl.getSecChiI02);

module.exports = router;