const SecChiF01 = require('../models/seccionalChi_F01');

const secChiF01Ctrl = {};


secChiF01Ctrl.getSecChiF01 =  async (req, res) =>{
    const secChiF01 = await SecChiF01.find();
    res.json(secChiF01)
}

module.exports = secChiF01Ctrl;