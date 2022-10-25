const app = require('./app');
const connectDatabase = require("./config/database")
//const cloudinary = require("cloudinary")
//Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Cerrar el servidor debido a un rechazo de promesa no controlado`);
    process.exit(1);
});

//config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({path:"b/config/config.env"});
}

//Connecting to datbase
connectDatabase();
/*
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});*/

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});

//Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Cerrar el servidor debido a un rechazo de promesa no controlado`);

    server.close(()=>{
        process.exit(1);
    });
});