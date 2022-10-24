const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {

    const {token}  = req.cookies;
    
    if(!token){
        return next(new ErrorHander("Porfavor Inicie Sesión",401));
    }
    
    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
    
    req.user = await User.findById(decodedData.id);

    next();
});

exports.authorizeRoles=(...roles)=>{

    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
        return next (
            new ErrorHander(
            `Role: ${req.user.role} no tiene acceso a este recurso`, 
            403
            )
        );
    }
     next();
    };
};

