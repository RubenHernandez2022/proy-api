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
    Producto:{
        type:String,
        required:true
    },
    Marca:{
        type:String
    }
}
)

module.exports=ArticulosSchema;