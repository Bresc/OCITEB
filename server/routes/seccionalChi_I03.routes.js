const express = require('express');
const router = express.Router();

const secChiI03Ctrl = require('../controllers/seccionalChi_I03.controller');

router.get('/', secChiI03Ctrl.getSecChiI03);

module.exports = router;