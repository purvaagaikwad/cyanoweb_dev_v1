const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    data1: {
      type: String,
      require: true,
      max:30,
    },
    data2: {
      type: String,
      require: true,
      max:20,
    },  
    data3: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("fileupload", FileSchema);