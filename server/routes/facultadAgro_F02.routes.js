const express = require('express');
const router = express.Router();

const facAgroF02Ctrl = require('../controllers/facultadAgro_F02.controller');


router.get('/', facAgroF02Ctrl.getFacAgroF02);

module.exports = router;