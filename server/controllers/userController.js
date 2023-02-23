const readingModel = require('../models/reading.model');
const User = require('../models/user.model');

module.exports.createUser = async(req,res,next) => {
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){
        next(err);
    }
}

module.exports.getAllUser = async(req,res,next) => {
    try{
        allUser = await User.find();
        res.status(200).json(allUser);
    }catch(err){
        next(err);
    }
}

module.exports.deleteUser = async(req,res,next) => {
    try{
        const deleted = await User.deleteOne({id: req.params.id});
        res.status(200).json(deleted);
    }catch(err){
        next(err);
    }
}