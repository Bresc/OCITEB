const express = require('express');
const router = express.Router();

const facCienI01Ctrl = require('../controllers/facultadCien_I01.controller');


router.get('/', facCienI01Ctrl.getFacCienI01);

module.exports = router;