const FacEduF02 = require('../models/facultadEdu_F02');

const facEduF02Ctrl = {};


facEduF02Ctrl.getFacEduF02 =  async (req, res) =>{
    const facEduF02 = await FacEduF02.find();
    res.json(facEduF02)
}

module.exports = facEduF02Ctrl;