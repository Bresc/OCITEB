const express = require('express');
const router = express.Router();

const facCienF01Ctrl = require('../controllers/facultadCien_F01.controller');


router.get('/', facCienF01Ctrl.getFacCienF01);

module.exports = router;