const express = require('express');
const router = express.Router();

const facCienI05Ctrl = require('../controllers/facultadCien_I05.controller');


router.get('/', facCienI05Ctrl.getFacCienI05);

module.exports = router;