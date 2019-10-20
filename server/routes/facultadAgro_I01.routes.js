const express = require('express');
const router = express.Router();

const facAgroI01Ctrl = require('../controllers/facultadAgro_I01.controller');


router.get('/', facAgroI01Ctrl.getFacAgroI01);

module.exports = router;