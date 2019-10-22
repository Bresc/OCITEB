const express = require('express');
const router = express.Router();

const secChiI05Ctrl = require('../controllers/seccionalChi_I05.controller');

router.get('/', secChiI05Ctrl.getSecChiI05);

module.exports = router;