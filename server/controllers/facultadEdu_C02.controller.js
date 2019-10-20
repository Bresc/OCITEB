const FacEduC02 = require('../models/facultadEdu_C02');

const facEduC02Ctrl = {};


facEduC02Ctrl.getFacEduC02 =  async (req, res) =>{
    const facEduC02 = await FacEduC02.find();
    res.json(facEduC02)
}

module.exports = facEduC02Ctrl;