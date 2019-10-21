const FacDerI05 = require('../models/facultadDer_I05');

const facDerI05Ctrl = {};


facDerI05Ctrl.getFacDerI05 =  async (req, res) =>{
    const facDerI05 = await FacDerI05.find();
    res.json(facDerI05)
}

module.exports = facDerI05Ctrl;