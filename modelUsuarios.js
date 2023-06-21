let mongoose= require('mongoose');

let UsuariosSchema = new mongoose.Schema({
    usuario:{
        type:String,
        required:true
    }
    ,
    contraseña:{
        type:String,
        required:true
    }
}
)

module.exports=UsuariosSchema;