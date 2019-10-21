const express = require('express');
const router = express.Router();

const facCienI02Ctrl = require('../controllers/facultadCien_I02.controller');


router.get('/', facCienI02Ctrl.getFacCienI02);

module.exports = router;