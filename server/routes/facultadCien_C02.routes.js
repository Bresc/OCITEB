const express = require('express');
const router = express.Router();

const facCienC02Ctrl = require('../controllers/facultadCien_C02.controller');


router.get('/', facCienC02Ctrl.getFacCienC02);

module.exports = router;