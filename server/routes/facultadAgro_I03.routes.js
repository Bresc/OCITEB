const express = require('express');
const router = express.Router();

const facAgroI03Ctrl = require('../controllers/facultadAgro_I03.controller');


router.get('/', facAgroI03Ctrl.getFacAgroI03);

module.exports = router;