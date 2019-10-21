const FacDerF01 = require('../models/facultadDer_F01');

const facDerF01Ctrl = {};


facDerF01Ctrl.getFacDerF01 =  async (req, res) =>{
    const facDerF01 = await FacDerF01.find();
    res.json(facDerF01)
}

module.exports = facDerF01Ctrl;