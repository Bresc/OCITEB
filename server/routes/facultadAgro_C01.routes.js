const express = require('express');
const router = express.Router();

const facAgroC01Ctrl = require('../controllers/facultadAgro_C01.controller');


router.get('/', facAgroC01Ctrl.getFacAgroC01);

module.exports = router;