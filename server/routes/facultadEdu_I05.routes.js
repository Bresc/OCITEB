const express = require('express');
const router = express.Router();

const facEduI05Ctrl = require('../controllers/facultadEdu_I05.controller');


router.get('/', facEduI05Ctrl.getFacEduI05);

module.exports = router;