const express = require('express');
const router = express.Router();

const facEcoI04Ctrl = require('../controllers/facultadEco_I04.controller');


router.get('/', facEcoI04Ctrl.getFacEcoI04);

module.exports = router;