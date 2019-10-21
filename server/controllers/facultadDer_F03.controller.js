const FacDerF03 = require('../models/facultadDer_F03');

const facDerF03Ctrl = {};


facDerF03Ctrl.getFacDerF03 =  async (req, res) =>{
    const facDerF03 = await FacDerF03.find();
    res.json(facDerF03)
}

module.exports = facDerF03Ctrl;