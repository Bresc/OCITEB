const express = require('express');
const router = express.Router();

const facEduF01Ctrl = require('../controllers/facultadEdu_F01.controller');


router.get('/', facEduF01Ctrl.getFacEduF01);

module.exports = router;