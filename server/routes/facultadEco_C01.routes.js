const express = require('express');
const router = express.Router();

const facEcoC01Ctrl = require('../controllers/facultadEco_C01.controller');


router.get('/', facEcoC01Ctrl.getFacEcoC01);

module.exports = router;