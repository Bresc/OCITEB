const express = require('express');
const router = express.Router();

const facCienF02Ctrl = require('../controllers/facultadCien_F02.controller');


router.get('/', facCienF02Ctrl.getFacCienF02);

module.exports = router;