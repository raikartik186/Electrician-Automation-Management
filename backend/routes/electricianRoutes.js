
const express = require('express');
const router = express.Router();
const electricianController = require('../controllers/electricianController');


router.get('/', electricianController.getAllElectricians);

module.exports = router;
