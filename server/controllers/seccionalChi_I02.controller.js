const SecChiI02 = require('../models/seccionalChi_I02');

const secChiI02Ctrl = {};


secChiI02Ctrl.getSecChiI02 =  async (req, res) =>{
    const secChiI02 = await SecChiI02.find();
    res.json(secChiI02)
}

module.exports = secChiI02Ctrl;