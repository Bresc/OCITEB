const SecChiC02 = require('../models/seccionalChi_C02');

const secChiC02Ctrl = {};


secChiC02Ctrl.getSecChiC02 =  async (req, res) =>{
    const secChiC02 = await SecChiC02.find();
    res.json(secChiC02)
}

module.exports = secChiC02Ctrl;