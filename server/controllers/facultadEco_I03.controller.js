const FacEcoI03 = require('../models/facultadEco_I03');

const facEcoI03Ctrl = {};


facEcoI03Ctrl.getFacEcoI03 =  async (req, res) =>{
    const facEcoI03 = await FacEcoI03.find();
    res.json(facEcoI03)
}

module.exports = facEcoI03Ctrl;