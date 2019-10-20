const express = require('express');
const router = express.Router();

const facEduI01Ctrl = require('../controllers/facultadEdu_I01.controller');


router.get('/', facEduI01Ctrl.getFacEduI01);

module.exports = router;