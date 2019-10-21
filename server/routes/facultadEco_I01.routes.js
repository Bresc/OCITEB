const express = require('express');
const router = express.Router();

const facEcoI01Ctrl = require('../controllers/facultadEco_I01.controller');


router.get('/', facEcoI01Ctrl.getFacEcoI01);

module.exports = router;