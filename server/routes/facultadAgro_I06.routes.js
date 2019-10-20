const express = require('express');
const router = express.Router();

const facAgroI06Ctrl = require('../controllers/facultadAgro_I06.controller');


router.get('/', facAgroI06Ctrl.getFacAgroI06);

module.exports = router;