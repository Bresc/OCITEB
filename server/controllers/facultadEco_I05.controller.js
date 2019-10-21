const FacEcoI05 = require('../models/facultadEco_I05');

const facEcoI05Ctrl = {};


facEcoI05Ctrl.getFacEcoI05 =  async (req, res) =>{
    const facEcoI05 = await FacEcoI05.find();
    res.json(facEcoI05)
}

module.exports = facEcoI05Ctrl;