const FacAgroC01 = require('../models/facultadAgro_C01');

const facAgroC01Ctrl = {};


facAgroC01Ctrl.getFacAgroC01 =  async (req, res) =>{
    const facAgroC01 = await FacAgroC01.find();
    res.json(facAgroC01)
}

module.exports = facAgroC01Ctrl;