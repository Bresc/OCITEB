const SecChiI06 = require('../models/seccionalChi_I06');

const secChiI06Ctrl = {};


secChiI06Ctrl.getSecChiI06 =  async (req, res) =>{
    const secChiI06 = await SecChiI06.find();
    res.json(secChiI06)
}

module.exports = secChiI06Ctrl;