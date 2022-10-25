const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require('cors');
const errorMiddleware = require("./middleware/error")
const path = require("path");
/*const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))
  */
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); //var jsonParser = bodyParser.json() create application/json parser
app.use(fileUpload());
/*
const origins = ["http://localhost:5173"]
const corsOptions={
  origin:(origin,callback)=>{
    if(origins.indexOf(origin)!== -1||!origin){
      callback(null, true)
    }else{
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionSuccessStatus:200
}*/
app.use(cors());

//route imports
const pub = require("./routes/pubRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", pub);
app.use("/api/v1", user);

app.use(express.static(path.join(__dirname,"../ui/RN/dist")));
app.get("*",(req,res)=>{
  res,sendFile(path.resolve(__dirname,"../ui/RN/dist/index.html"));
});
//Midleware for Errors
app.use(errorMiddleware);

module.exports = app;
