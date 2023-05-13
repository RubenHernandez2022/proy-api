let mongoose= require('mongoose');
 let ArticulosDB =require('../modelArticulos');
 let Articulo= mongoose.model('Artículo',ArticulosDB);



const todoProd=async()=>{
    let articulosGuardados= await Articulo.find();
   // console.log(articulosGuardados)
    return articulosGuardados
}
module.exports={todoProd}