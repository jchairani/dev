const jwt = require('jsonwebtoken');
const createError = require('./error');

module.exports.verifyAdmin = (req,res,next) => {
    const token = req.cookies.access_token;

    if(!token){
        return res.redirect('/login');
    }

    jwt.verify(token,process.env.JWT,(err,user) => {
        if(err){
            return next(createError(403,"Token invalid"));
        }
        req.user = user;
        next();
    })
}
