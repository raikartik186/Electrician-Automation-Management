
const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');


router.get('/', siteController.getAllSites);
router.post('/assign', siteController.assignElectrician);
router.post('/change-date', siteController.changeInstallationDate);

module.exports = router;
