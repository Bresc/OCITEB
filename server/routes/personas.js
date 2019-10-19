const express = require('express');
const router = express.Router();
const personaCtrl = require('../controllers/personas');

router.get('/', personaCtrl.getPersona);
router.post('/', personaCtrl.createPersona);

module.exports = router;