const express = require('express');
const router = express.Router();

const facEcoF02Ctrl = require('../controllers/facultadEco_F02.controller');


router.get('/', facEcoF02Ctrl.getFacEcoF02);

module.exports = router;