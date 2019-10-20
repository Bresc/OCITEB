const FacAgroF02 = require('../models/facultadAgro_F02');

const facAgroF02Ctrl = {};


facAgroF02Ctrl.getFacAgroF02 =  async (req, res) =>{
    const facAgroF02 = await FacAgroF02.find();
    res.json(facAgroF02)
}

module.exports = facAgroF02Ctrl;