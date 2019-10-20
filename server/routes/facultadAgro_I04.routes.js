const express = require('express');
const router = express.Router();

const facAgroI04Ctrl = require('../controllers/facultadAgro_I04.controller');


router.get('/', facAgroI04Ctrl.getFacAgroI04);

module.exports = router;