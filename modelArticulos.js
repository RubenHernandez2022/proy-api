let mongoose= require('mongoose');

let ArticulosSchema = new mongoose.Schema({
    tipoProducto:{
        type:String,
        required:true     ,
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