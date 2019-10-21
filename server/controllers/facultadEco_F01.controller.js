const FacEcoF01 = require('../models/facultadEco_F01');

const facEcoF01Ctrl = {};


facEcoF01Ctrl.getFacEcoF01 =  async (req, res) =>{
    const facEcoF01 = await FacEcoF01.find();
    res.json(facEcoF01)
}

module.exports = facEcoF01Ctrl;