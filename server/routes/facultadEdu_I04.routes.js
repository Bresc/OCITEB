const express = require('express');
const router = express.Router();

const facEduI04Ctrl = require('../controllers/facultadEdu_I04.controller');


router.get('/', facEduI04Ctrl.getFacEduI04);

module.exports = router;