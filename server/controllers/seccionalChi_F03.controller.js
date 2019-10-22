const SecChiF03 = require('../models/seccionalChi_F03');

const secChiF03Ctrl = {};


secChiF03Ctrl.getSecChiF03 =  async (req, res) =>{
    const secChiF03 = await SecChiF03.find();
    res.json(secChiF03)
}

module.exports = secChiF03Ctrl;