const FacAgroI05 = require('../models/facultadAgro_I05');

const facAgroI05Ctrl = {};


facAgroI05Ctrl.getFacAgroI05 =  async (req, res) =>{
    const facAgroI05 = await FacAgroI05.find();
    res.json(facAgroI05)
}

module.exports = facAgroI05Ctrl;