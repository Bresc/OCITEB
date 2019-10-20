const express = require('express');
const router = express.Router();

const facEduF02Ctrl = require('../controllers/facultadEdu_F02.controller');


router.get('/', facEduF02Ctrl.getFacEduF02);

module.exports = router;