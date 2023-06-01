let mongoose= require('mongoose');
 let ArticulosDB =require('../modelArticulos');
 let Articulo= mongoose.model('Artículo',ArticulosDB);

const todoProd=async()=>{
    let articulosGuardados= await Articulo.find();
   // console.log(articulosGuardados)
    return articulosGuardados
}

const eliminarUnProducto=async({tipoProducto,Producto})=>{
   
    let resultado=await Articulo.deleteOne({tipoProducto:tipoProducto,Producto:Producto});
    return resultado
}

module.exports={todoProd,eliminarUnProducto}