const FacEcoF03 = require('../models/facultadEco_F03');

const facEcoF03Ctrl = {};


facEcoF03Ctrl.getFacEcoF03 =  async (req, res) =>{
    const facEcoF03 = await FacEcoF03.find();
    res.json(facEcoF03)
}

module.exports = facEcoF03Ctrl;