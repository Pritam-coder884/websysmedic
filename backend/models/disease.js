const mongoose=require("mongoose");

const diseaseSchema=new mongoose.Schema({
    DiseaseName:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        required:true
    },


    // trk : [{
    //     lat : String,
    //     lng : String
    // }]
    // trk : { type : Array , "default" : [] }

    
    symptomOfDisease:{
        type : Array , "default" : []
    }
})

module.exports=diseaseSchema


// we will create a new collection
const Disease=new mongoose.model("Disease",diseaseSchema);
module.exports=Disease;