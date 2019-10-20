const express = require('express');
const router = express.Router();

const facEduI02Ctrl = require('../controllers/facultadEdu_I02.controller');


router.get('/', facEduI02Ctrl.getFacEduI02);

module.exports = router;