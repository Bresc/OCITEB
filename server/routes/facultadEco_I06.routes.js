const express = require('express');
const router = express.Router();

const facEcoI06Ctrl = require('../controllers/facultadEco_I06.controller');


router.get('/', facEcoI06Ctrl.getFacEcoI06);

module.exports = router;