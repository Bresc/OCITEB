const SecChiC01 = require('../models/seccionalChi_C01');

const secChiC01Ctrl = {};


secChiC01Ctrl.getSecChiC01 =  async (req, res) =>{
    const secChiC01 = await SecChiC01.find();
    res.json(secChiC01)
}

module.exports = secChiC01Ctrl;