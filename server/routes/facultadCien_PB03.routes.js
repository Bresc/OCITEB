const express = require('express');
const router = express.Router();

const facCienPB03Ctrl = require('../controllers/facultadCien_PB03.controller');


router.get('/', facCienPB03Ctrl.getFacCienPB03);

module.exports = router;