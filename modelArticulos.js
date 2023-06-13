let mongoose= require('mongoose');

let ArticulosSchema = new mongoose.Schema({
    imagen:{
        type:String
    }
    ,
    tipoProducto:{
        type:String,
        required:true
    },
    producto:{
        type:String,
        required:true
    },
    marca:{
        type:String
    }
}
)

module.exports=ArticulosSchema;