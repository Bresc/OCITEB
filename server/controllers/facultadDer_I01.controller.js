const FacDerI01 = require('../models/facultadDer_I01');

const facDerI01Ctrl = {};


facDerI01Ctrl.getFacDerI01 =  async (req, res) =>{
    const facDerI01 = await FacDerI01.find();
    res.json(facDerI01)
}

module.exports = facDerI01Ctrl;