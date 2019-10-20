const FacEduF03 = require('../models/facultadEdu_F03');

const facEduF03Ctrl = {};


facEduF03Ctrl.getFacEduF03 =  async (req, res) =>{
    const facEduF03 = await FacEduF03.find();
    res.json(facEduF03)
}

module.exports = facEduF03Ctrl;