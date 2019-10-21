const express = require('express');
const router = express.Router();

const facEcoI02Ctrl = require('../controllers/facultadEco_I02.controller');


router.get('/', facEcoI02Ctrl.getFacEcoI02);

module.exports = router;