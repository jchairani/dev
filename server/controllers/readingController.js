const Reading = require('../models/reading.model');
const userModel = require('../models/user.model');

//CREATE
module.exports.createReading = async(req,res,next) => {
    const newReads = new Reading(req.body);

    try{
        const savedReading = await newReads.save();
        res.status(200).json(savedReading);
    }catch(err){
        next(err);
    }
}

//GET ALL
module.exports.getAllReading = async(req,res,next) => {
    try{
        const myHotels = await Reading.find();
        res.status(200).json(myHotels);
    }catch(err){
        next(err);
    }
}

//GET BY ID
module.exports.getReadingByID = async(req,res,next) => {
    try{
        const myHotels = await Reading.findById(req.params.id);
        res.status(200).json(myHotels);
    }catch(err){
        next(err);
    }
}
//DELETE BY ID
module.exports.deleteReading = async(req,res,next) => {
    try{
        // const deleteReads = await Reading.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        const deleted = await Reading.deleteOne({_id: req.params.id});
        res.status(200).json(deleted)
    }catch(err){
        next(err);
    }
}

//UPDATE BY ID
module.exports.updateReading = async(req,res,next) => {
    try{    
        const updatedReading = await 
            Reading.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true});
        res.status(200).json(updatedReading);
    }catch(err){
        next(err);
    }
}

