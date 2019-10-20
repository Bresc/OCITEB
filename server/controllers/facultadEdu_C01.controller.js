const FacEduC01 = require('../models/facultadEdu_C01');

const facEduC01Ctrl = {};


facEduC01Ctrl.getFacEduC01 =  async (req, res) =>{
    const facEduC01 = await FacEduC01.find();
    res.json(facEduC01)
}

module.exports = facEduC01Ctrl;