const Fileupload = require("../models/Fileupload");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER
router.post("/uploadFile", async (req, res) => {
  try {
    //create new user
    const fileData = new Fileupload({
      data1:req.body.STATION,
      data2:req.body.STATION_NAME,
      data2:req.body.ELEVATION,

    });

    //save user and respond
    const fu = await fileData.save();
    res.status(200).json(fu._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;