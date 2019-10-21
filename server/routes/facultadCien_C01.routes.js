const express = require('express');
const router = express.Router();

const facCienC01Ctrl = require('../controllers/facultadCien_C01.controller');


router.get('/', facCienC01Ctrl.getFacCienC01);

module.exports = router;