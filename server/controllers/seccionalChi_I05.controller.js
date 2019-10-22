const SecChiI05 = require('../models/seccionalChi_I05');

const secChiI05Ctrl = {};


secChiI05Ctrl.getSecChiI05 =  async (req, res) =>{
    const secChiI05 = await SecChiI05.find();
    res.json(secChiI05)
}

module.exports = secChiI05Ctrl;