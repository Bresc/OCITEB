const FacEduI01 = require('../models/facultadEdu_I01');

const facEduI01Ctrl = {};


facEduI01Ctrl.getFacEduI01 =  async (req, res) =>{
    const facEduI01 = await FacEduI01.find();
    res.json(facEduI01)
}

module.exports = facEduI01Ctrl;