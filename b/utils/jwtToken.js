//Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
    
    const token = user.getJWTToken();
    //options for cookie
    const options = {
        maxAge: new Date() * 0.001 + 300,
        httpOnly: true,
        
      };
        res.status(statusCode).cookie("token", token, options).json({
        success:true,
        user,
        token,
        
    });
};


module.exports = sendToken;  