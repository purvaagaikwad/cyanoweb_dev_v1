const mongoose = require("mongoose");

const SformuploadSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      require: true,
      max:300,
    },
    date: {
      type: Date,
      require: true,
    
    },  
    device: {
      type: String,


    },
    model: {
      type: String,


    },
    watertemp: {
      type: Number,
      required: true,
      max: 30,
      min: 0,
    },

    waterph: {
        type: Number,
        required: true,
        max: 14,
        min: 1
      },
    

    


    reactiontime: {
        type: Number,

      },  
 


      timeunit: {
        type: String,

      }, 





      initialturbidity: {
        type: Number,
        required: true,
        
      }, 


     finalturbidity: {
        type: Number,
        required: true,
        
      }, 


     turbidityremoval: {
        type: Number,
        required: true,
        
      }, 


      totalmicrocystisinitial: {
        type: Number,
        required: true,
        
      }, 


      totalmicrocystisfinal: {
        type: Number,
        required: true,
        
      }, 
       totalmicrocystisremoval: {
        type: Number,
        required: true,
        
      }, 
       mcyemicrocystisinitial: {
        type: Number,
        required: true,
        
      }, 
       mcyemicrocystisfinal: {
        type: Number,
        required: true,
        
      }, 
       mcyemicrocystisremoval: {
        type: Number,
        required: true,
        
      }, 
       mcyeplanktothrixinitial: {
        type: Number,
        required: true,
        
      }, 
       mcyeplanktothrixfinal: {
        type: Number,
        required: true,
        
      }, 
       mcyeplanktothrixremoval: {
        type: Number,
        required: true,
        
      }, 
       totalmicrocystinsinitial: {
        type: Number,
        required: true,
        
      }, 
       totalmicrocystinsfinal: {
        type: Number,
        required: true,
        
      }, 
       totalmicrocystinsremoval: {
        type: Number,
        required: true,
        
      }, 


  },
  { timestamps: true }
);

module.exports = mongoose.model("Sformupload", SformuploadSchema);