const express = require('express');
const router = express.Router();

const facEcoF01Ctrl = require('../controllers/facultadEco_F01.controller');


router.get('/', facEcoF01Ctrl.getFacEcoF01);

module.exports = router;