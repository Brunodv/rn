const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:[true,"Ingrese usuario"],
        maxLength:[30,"el nombre no puede exceder 30 caracteres"],
        minLength:[4,"el nombre debe tener mas de 4 caracteres"]
    },
    email:{
        type:String,
        required:[true,"Ingrese su correo"],
        unique:true,
        validate:[validator.isEmail,"Ingrese un correo valido"]
    },
    password:{
        type:String,
        required:[true,"Ingrese su contraseña"],
        minLength:[8,"La contraseña debe tener mas de 8 caracteres"],
        select:false,
    },
    role:{
        type:String,
        default:"user",
    },

    resetPasswordToken:String,
    ResetPasswordExpire:Date,
});

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);

});

//JWT TOKEN
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  

//Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model("User",userSchema);