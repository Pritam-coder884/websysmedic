const express = require("express");
const route = new express.Router();
const Disease=require("../models/disease");


// create a new Disease

route.post("/disease",async(req,res)=>{
    try {
        // console.log(req.body);
        
        const disease = new Disease(req.body);

        const newDisease = await disease.save();
        res.status(200).send(newDisease);
      } catch (err) {
        res.status(400).send(err);
      }
})



route.get("/disease",async(req,res)=>{
    try{
      const diseaseData=await Disease.find();
    //   console.log(diseaseData);
      res.status(200).send(diseaseData);
  
    }catch(err){
      req.status(400).send(err);
    }
})




route.get("/disease/symptomOfDisease",async(req,res)=>{
  try{

    // // checking for postman the code is :
    // const symptoms=req.body.symptomOfDisease
    // const symptomsData=await Disease.find({symptomOfDisease:{$all:symptoms}})





    const symptoms=req.query.symptoms
    // console.log(symptoms);
    const symptomsData=await Disease.find({symptomOfDisease:{$all:[symptoms]}})
    // console.log(symptomsData);
    if (!symptomsData.length) {
      res.status(404).send();
    } else {
      res.send(symptomsData);
    }
  }catch(err){
    req.status(400).send(err);
  }
})


module.exports=route;