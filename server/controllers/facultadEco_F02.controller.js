const FacEcoF02 = require('../models/facultadEco_F02');

const facEcoF02Ctrl = {};


facEcoF02Ctrl.getFacEcoF02 =  async (req, res) =>{
    const facEcoF02 = await FacEcoF02.find();
    res.json(facEcoF02)
}

module.exports = facEcoF02Ctrl;