let mongoose= require('mongoose');

let ArticulosScheme = new mongoose.Schema({
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

module.exports=ArticulosScheme;