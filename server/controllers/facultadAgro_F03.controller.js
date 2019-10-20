const FacAgroF03 = require('../models/facultadAgro_F03');

const facAgroF03Ctrl = {};


facAgroF03Ctrl.getFacAgroF03 =  async (req, res) =>{
    const facAgroF03 = await FacAgroF03.find();
    res.json(facAgroF03)
}

module.exports = facAgroF03Ctrl;