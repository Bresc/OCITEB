const FacEcoI02 = require('../models/facultadEco_I02');

const facEcoI02Ctrl = {};


facEcoI02Ctrl.getFacEcoI02 =  async (req, res) =>{
    const facEcoI02 = await FacEcoI02.find();
    res.json(facEcoI02)
}

module.exports = facEcoI02Ctrl;