
const siteData = require('../data/siteData');

const getAllSites = (req, res) => {
    res.json(siteData);
};

const assignElectrician = (req, res) => {
    
    res.json({ message: 'Electricians assigned successfully' });
};

const changeInstallationDate = (req, res) => {
    
    res.json({ message: 'Installation date changed successfully' });
};

module.exports = {
    getAllSites,
    assignElectrician,
    changeInstallationDate
};
