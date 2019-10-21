const express = require('express');
const router = express.Router();

const facCienI04Ctrl = require('../controllers/facultadCien_I04.controller');


router.get('/', facCienI04Ctrl.getFacCienI04);

module.exports = router;