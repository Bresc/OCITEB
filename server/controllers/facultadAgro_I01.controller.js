const FacAgroI01 = require('../models/facultadAgro_I01');

const facAgroI01Ctrl = {};


facAgroI01Ctrl.getFacAgroI01 =  async (req, res) =>{
    const facAgroI01 = await FacAgroI01.find();
    res.json(facAgroI01)
}

module.exports = facAgroI01Ctrl;