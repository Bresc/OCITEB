const FacAgroF01 = require('../models/facultadAgro_F01');

const facAgroF01Ctrl = {};


facAgroF01Ctrl.getFacAgroF01 =  async (req, res) =>{
    const facAgroF01 = await FacAgroF01.find();
    res.json(facAgroF01)
}

module.exports = facAgroF01Ctrl;