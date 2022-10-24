const mongoose = require("mongoose");
const mongoosePaginate = require ('mongoose-paginate-v2') 

const pubSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Ingrese el titulo del a noticia'],
        trim:true
    },
    description:{
        type:String,
        required:[true,'ingrese un descripción breve']
    },
    descriptionExtended:{
        type:String,
        required:[true,'ingrese un descripción breve']
    },
    image:[ 
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

pubSchema.plugin(mongoosePaginate); //quitar para paginación manual

module.exports=mongoose.model("Pub",pubSchema);