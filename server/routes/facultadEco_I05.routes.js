const express = require('express');
const router = express.Router();

const facEcoI05Ctrl = require('../controllers/facultadEco_I05.controller');


router.get('/', facEcoI05Ctrl.getFacEcoI05);

module.exports = router;