const express = require('express');
const router = express.Router();

const facAgroI02Ctrl = require('../controllers/facultadAgro_I02.controller');


router.get('/', facAgroI02Ctrl.getFacAgroI02);

module.exports = router;