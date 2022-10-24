const Pub = require("../models/pubModel");//paginate v2
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const multer = require("multer");
//const cloudinary = require("cloudinary");

//const ApiFeatures = require("../utils/apiFeatures"); para paginación manual

//create Pub -- Admin
exports.createPub = catchAsyncErrors(async (req, res, next) => {
  /*
  para subida de imagenes con multer
  const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null, './api/v1/pub/new')
    },
    filename:(req,file,cb)=>{
      const ext = file.originalname.split('').pop()
      cb(null,`${Date.now()}.${ext}`)
    }
  })
  const upload = multer({storage})
  upload.single('file')
*/

  /*let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }
  
    const imagesLinks = [];
  
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });
  
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
  
    req.body.images = imagesLinks;
    req.body.user = req.user.id;
  */
    const pub = await Pub.create(req.body);
  
    res.status(201).json({
      success: true,
      pub,
    });
  });
  //get 3 pubs

//Get All Pubs
exports.getAllPubs=catchAsyncErrors(async(req,res)=>{
    
    //const pubForPage=3; comentarios para paginación manual
    const limit = 100;
    const pubs = await Pub.paginate({},{limit});
    //const pubs = await Pub.paginate({},{limit:3,page:page});
    //const apiFeature = new ApiFeatures(Pub.find(),req.query).pagination(pubForPage);
    //const pubs= await apiFeature.query;
    res.status(200).json({
        success:true,
        pubs,
    });
});


//Update Pub -- Admin

exports.updatePub = catchAsyncErrors(async (req,res,next)=>{

    let pub = await Pub.findById(req.params.id);
    
    if(!pub){
        return next(new ErrorHander("Pub no encontrada",404));    
    }

    pub = await Pub.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });
    
    res.status(200).json({
        succes:true,
        pub
    });
});

//get pub details

exports.getPubDetails=catchAsyncErrors(async(req,res,next)=>{
    const pub = await Pub.findById(req.params.id);

    if(!pub){
        return next(new ErrorHander("Pub no encontrada",404));    
    }

    res.status(200).json({
        success:true,
        pub
    });
});

//delete Pub

exports.deletePub = catchAsyncErrors(async(req,res,next)=>{
    const pub = await Pub.findById(req.params.id);

    if(!pub){
        return next(new ErrorHander("Pub no encontrada",404));    
    }

    await pub.remove()
    res.status(200).json({
        succes:true,
        message:"Pub Delete Success"
    });
});