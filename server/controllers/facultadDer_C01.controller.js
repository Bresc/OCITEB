const FacDerC01 = require('../models/facultadDer_C01');

const facDerC01Ctrl = {};


facDerC01Ctrl.getFacDerC01 =  async (req, res) =>{
    const facDerC01 = await FacDerC01.find();
    res.json(facDerC01)
}

module.exports = facDerC01Ctrl;