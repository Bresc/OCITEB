const FacEduI06 = require('../models/facultadEdu_I06');

const facEduI06Ctrl = {};


facEduI06Ctrl.getFacEduI06 =  async (req, res) =>{
    const facEduI06 = await FacEduI06.find();
    res.json(facEduI06)
}

module.exports = facEduI06Ctrl;