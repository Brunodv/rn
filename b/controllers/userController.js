const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//Register a User
/*
exports.registerUser = catchAsyncErrors(async(req,res,next)=>{
    const {name, email, password}=req.body;

    const user = await User.create({
        name,
        email,
        password,
    });
    
   sendToken(user,201,res);
     /*se reemplazó pasada la prueba
    const token = user.getJWTToken();

    res.status(201).json({
        success:true,
        token,
    });
});
*/
//login User

exports.loginUser = catchAsyncErrors(async(req,res,next)=>{

    const { email, password } = req.body;
    // cheking if user has given password and email
    if(!email|| !password){
        return next(new ErrorHander("Ingrese el correo y contraseña",400))
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHander("Contraseña o correo incorrectos", 401))
    }
    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHander("Contraseña o correo incorrectos", 401))
    }

     sendToken(user, 200, res);
     
});

//Logout User
exports.logout = catchAsyncErrors(async(req,res,next)=>{
    
    res.cookie("token",null,{
        maxAge:new Date(Date.now()),
        httpOnly:true,
    });

    res.status(200).json({
        success:true,
        message:"Logged Out"
    });

});
