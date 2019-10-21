const FacDerI02 = require('../models/facultadDer_I02');

const facDerI02Ctrl = {};


facDerI02Ctrl.getFacDerI02 =  async (req, res) =>{
    const facDerI02 = await FacDerI02.find();
    res.json(facDerI02)
}

module.exports = facDerI02Ctrl;