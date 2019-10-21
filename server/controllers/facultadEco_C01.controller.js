const FacEcoC01 = require('../models/facultadEco_C01');

const facEcoC01Ctrl = {};


facEcoC01Ctrl.getFacEcoC01 =  async (req, res) =>{
    const facEcoC01 = await FacEcoC01.find();
    res.json(facEcoC01)
}

module.exports = facEcoC01Ctrl;