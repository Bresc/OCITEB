const express = require('express');
const router = express.Router();

const facCienI06Ctrl = require('../controllers/facultadCien_I06.controller');


router.get('/', facCienI06Ctrl.getFacCienI06);

module.exports = router;