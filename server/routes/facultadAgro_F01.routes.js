const express = require('express');
const router = express.Router();

const facAgroF01Ctrl = require('../controllers/facultadAgro_F01.controller');


router.get('/', facAgroF01Ctrl.getFacAgroF01);

module.exports = router;