const FacDerI06 = require('../models/facultadDer_I06');

const facDerI06Ctrl = {};


facDerI06Ctrl.getFacDerI06 =  async (req, res) =>{
    const facDerI06 = await FacDerI06.find();
    res.json(facDerI06)
}

module.exports = facDerI06Ctrl;