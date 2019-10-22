const SecChiI03 = require('../models/seccionalChi_I03');

const secChiI03Ctrl = {};


secChiI03Ctrl.getSecChiI03 =  async (req, res) =>{
    const secChiI03 = await SecChiI03.find();
    res.json(secChiI03)
}

module.exports = secChiI03Ctrl;