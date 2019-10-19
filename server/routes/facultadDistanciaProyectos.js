const express = require('express');
const router = express.Router();
const facDisCtrl = require('../controllers/facultadDistanciaProyectos');

router.get('/', facDisCtrl.getProyecto);

module.exports = router;