const express = require('express');
const router = express.Router();

const facEduF03Ctrl = require('../controllers/facultadEdu_F03.controller');


router.get('/', facEduF03Ctrl.getFacEduF03);

module.exports = router;