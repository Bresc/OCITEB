const express = require('express');
const router = express.Router();

const facCienC0201Ctrl = require('../controllers/facultadCien_C0201.controller');


router.get('/', facCienC0201Ctrl.getFacCienC0201);

module.exports = router;