const FacEcoI04 = require('../models/facultadEco_I04');

const facEcoI04Ctrl = {};


facEcoI04Ctrl.getFacEcoI04 =  async (req, res) =>{
    const facEcoI04 = await FacEcoI04.find();
    res.json(facEcoI04)
}

module.exports = facEcoI04Ctrl;