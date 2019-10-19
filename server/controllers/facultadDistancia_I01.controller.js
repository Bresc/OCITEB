const FacDistanciaI01 = require('../models/facultadDistancia_I01');

const facDistanciaI01Ctrl = {};


facDistanciaI01Ctrl.getFacDistanciaI01 =  async (req, res) =>{
    const facDistanciaI01 = await FacDistanciaI01.find();
    res.json(facDistanciaI01)
}

facDistanciaI01Ctrl.postFacDistanciaI01 = async(req,res)=>{
    const post = new Post({PROYECTO:"Proyecto1"});
    await post.save();
}



module.exports = facDistanciaI01Ctrl;