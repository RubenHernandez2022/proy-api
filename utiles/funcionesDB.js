let mongoose= require('mongoose');
 let ArticulosDB =require('../modelArticulos');
 let Articulo= mongoose.model('Artículo',ArticulosDB);

const todoProd=async()=>{
    let articulosGuardados= await Articulo.find();
   // console.log(articulosGuardados)
    return articulosGuardados
}

const eliminarUnProducto=async()=>{
    let resultado=await Articulo.deleteOne();
    return resultado
}

module.exports={todoProd,eliminarUnProducto}