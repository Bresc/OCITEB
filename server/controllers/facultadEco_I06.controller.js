const FacEcoI06 = require('../models/facultadEco_I06');

const facEcoI06Ctrl = {};


facEcoI06Ctrl.getFacEcoI06 =  async (req, res) =>{
    const facEcoI06 = await FacEcoI06.find();
    res.json(facEcoI06)
}

module.exports = facEcoI06Ctrl;