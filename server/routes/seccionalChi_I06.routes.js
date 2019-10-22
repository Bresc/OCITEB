const express = require('express');
const router = express.Router();

const secChiI06Ctrl = require('../controllers/seccionalChi_I06.controller');

router.get('/', secChiI06Ctrl.getSecChiI06);

module.exports = router;