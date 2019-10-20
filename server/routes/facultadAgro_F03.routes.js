const express = require('express');
const router = express.Router();

const facAgroF03Ctrl = require('../controllers/facultadAgro_F03.controller');


router.get('/', facAgroF03Ctrl.getFacAgroF03);

module.exports = router;