const FFormupload = require("../models/Fformupload");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER
router.post("/", async (req, res) => {
  try { console.log ("inside cform upload",req.body)


    //create new dataentry
    const newDataentry = new FFormupload({
      location:req.body.location,
      date:req.body.date,  
      device: req.body.device,
      model: req.body.model,
      watertemp: req.body.watertemp,
      waterph: req.body.waterph,
      supplier: req.body.supplier,
      chemicaldosage: req.body.chemicaldosage,
      reactiontime: req.body.reactiontime,
      chemical:req.body.chemical,
      otherchemical:req.body.otherchemical,
      timeunit: req.body.timeunit,
      chemicalspeed: req.body.chemicalspeed,
      initialturbidity: req.body.initialturbidity,
      finalturbidity: req.body.finalturbidity,
      turbidityremoval: req.body.turbidityremoval,
      totalmicrocystisinitial: req.body.totalmicrocystisinitial,
      totalmicrocystisfinal: req.body.totalmicrocystisfinal,
      totalmicrocystisremoval: req.body.totalmicrocystisremoval,
      mcyemicrocystisinitial: req.body.mcyemicrocystisinitial,
      mcyemicrocystisfinal: req.body.mcyemicrocystisfinal,
      mcyemicrocystisremoval: req.body.mcyemicrocystisremoval,
      mcyeplanktothrixinitial: req.body.mcyeplanktothrixinitial,
      mcyeplanktothrixfinal: req.body.mcyeplanktothrixfinal,
      mcyeplanktothrixremoval: req.body.mcyeplanktothrixremoval,
      totalmicrocystinsinitial: req.body.totalmicrocystinsinitial,
      totalmicrocystinsfinal: req.body.totalmicrocystinsfinal,
      totalmicrocystinsremoval: req.body.totalmicrocystinsremoval

    });

    //save data and respond
    const Dataentry = await newDataentry.save();
    res.status(200).json({"msg":Dataentry});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;