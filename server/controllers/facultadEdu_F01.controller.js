const FacEduF01 = require('../models/facultadEdu_F01');

const facEduF01Ctrl = {};


facEduF01Ctrl.getFacEduF01 =  async (req, res) =>{
    const facEduF01 = await FacEduF01.find();
    res.json(facEduF01)
}

module.exports = facEduF01Ctrl;