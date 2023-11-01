
const electricianData = require('../data/electricianData');

const getAllElectricians = (req, res) => {
    res.json(electricianData);
};

module.exports = {
    getAllElectricians
};
