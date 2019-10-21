const FacEcoI01 = require('../models/facultadEco_I01');

const facEcoI01Ctrl = {};


facEcoI01Ctrl.getFacEcoI01 =  async (req, res) =>{
    const facEcoI01 = await FacEcoI01.find();
    res.json(facEcoI01)
}

module.exports = facEcoI01Ctrl;