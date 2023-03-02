const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.register = async(req,res,next) => {
    try{
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({
            username: req.body.username,
            password: hash
        })
        await newUser.save()
        res.status(201).send("New user created");
    }catch(err){
        next(err);
    }
}

module.exports.login = async(req,res,next) => {
    try{
        const user = await User.findOne({
            username: req.body.username
        })
        if(!user) return next(createError(404,"User not found"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!isPasswordCorrect) return next(createError(400,"Wrong password or username"));

        const token = jwt.sign({user},process.env.JWT,{expiresIn:"1h"});

        // res.header("access_token",token).send(token);
        res.cookie("access_token",token,{
            httpOnly: false,
            maxAge: 60000
        }).status(200).json(token);
    }catch(err){
        next(err);
    }
}