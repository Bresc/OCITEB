const express = require('express');
const router = express.Router();

const facEcoF03Ctrl = require('../controllers/facultadEco_F03.controller');


router.get('/', facEcoF03Ctrl.getFacEcoF03);

module.exports = router;