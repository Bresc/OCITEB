const SecChiI01 = require('../models/seccionalChi_I01');

const secChiI01Ctrl = {};


secChiI01Ctrl.getSecChiI01 =  async (req, res) =>{
    const secChiI01 = await SecChiI01.find();
    res.json(secChiI01)
}

module.exports = secChiI01Ctrl;