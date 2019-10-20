const FacAgroI06 = require('../models/facultadAgro_I06');

const facAgroI06Ctrl = {};


facAgroI06Ctrl.getFacAgroI06 =  async (req, res) =>{
    const facAgroI06 = await FacAgroI06.find();
    res.json(facAgroI06)
}

module.exports = facAgroI06Ctrl;