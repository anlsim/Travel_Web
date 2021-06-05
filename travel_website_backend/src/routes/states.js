const express = require('express')
const router = express.Router()
const State = require("../models/State");

//NEW CATEGORY
router.post("/", async(req, res)=>{
    const newState = new State(req.body);
    try{
        const savedState = await newState.save();
        res.status(200).json(savedState);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET CATEGORY
router.get("/", async(req, res)=>{
    try{
        const states = await State.find();
        res.status(200).json(states);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
