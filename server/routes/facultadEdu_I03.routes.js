const express = require('express');
const router = express.Router();

const facEduI03Ctrl = require('../controllers/facultadEdu_I03.controller');


router.get('/', facEduI03Ctrl.getFacEduI03);

module.exports = router;