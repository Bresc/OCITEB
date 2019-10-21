const FacDerC02 = require('../models/facultadDer_C02');

const facDerC02Ctrl = {};


facDerC02Ctrl.getFacDerC02 =  async (req, res) =>{
    const facDerC02 = await FacDerC02.find();
    res.json(facDerC02)
}

module.exports = facDerC02Ctrl;