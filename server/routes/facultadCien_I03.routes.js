const express = require('express');
const router = express.Router();

const facCienI03Ctrl = require('../controllers/facultadCien_I03.controller');


router.get('/', facCienI03Ctrl.getFacCienI03);

module.exports = router;