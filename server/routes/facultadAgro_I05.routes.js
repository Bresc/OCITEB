const express = require('express');
const router = express.Router();

const facAgroI05Ctrl = require('../controllers/facultadAgro_I05.controller');


router.get('/', facAgroI05Ctrl.getFacAgroI05);

module.exports = router;