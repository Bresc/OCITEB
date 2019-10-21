const express = require('express');
const router = express.Router();

const facCienF03Ctrl = require('../controllers/facultadCien_F03.controller');


router.get('/', facCienF03Ctrl.getFacCienF03);

module.exports = router;