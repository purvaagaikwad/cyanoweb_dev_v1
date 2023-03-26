const Dataupload = require("../models/Dataupload");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER
router.post("/", async (req, res) => {
  try { console.log ("inside data upload",req.body)


    //create new dataentry
    const newDataentry = new Dataupload({
      location:req.body.location,
      date:req.body.date,  
      temperature: req.body.temperature,
      ph: req.body.ph,
      turbidity: req.body.turbidity,
      //zetapotential: req.body.zetapotential,
      dissolvedoxygen: req.body.dissolvedoxygen,
      //totaldissolvedsolids: req.body.totaldissolvedsolids,
     // electricalconductivity: req.body.electricalconductivity,
      totalmicrocytis: req.body.totalmicrocytis,
      mcyemicrocytis: req.body.mcyemicrocytis,
      mcyeplanktothrix: req.body.mcyeplanktothrix,
      totalmicrocystins: req.body.totalmicrocystins
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