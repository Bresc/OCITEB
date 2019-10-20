const express = require('express');
const router = express.Router();

const facEduC01Ctrl = require('../controllers/facultadEdu_C01.controller');


router.get('/', facEduC01Ctrl.getFacEduC01);

module.exports = router;