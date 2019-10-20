const express = require('express');
const router = express.Router();

const facEduI06Ctrl = require('../controllers/facultadEdu_I06.controller');


router.get('/', facEduI06Ctrl.getFacEduI06);

module.exports = router;