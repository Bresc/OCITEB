const express = require('express');
const router = express.Router();

const facEduC02Ctrl = require('../controllers/facultadEdu_C02.controller');


router.get('/', facEduC02Ctrl.getFacEduC02);

module.exports = router;