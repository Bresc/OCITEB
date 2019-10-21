const express = require('express');
const router = express.Router();

const facEcoI03Ctrl = require('../controllers/facultadEco_I03.controller');


router.get('/', facEcoI03Ctrl.getFacEcoI03);

module.exports = router;