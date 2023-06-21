let mongoose= require('mongoose');
let ArticulosDB =require('../modelArticulos');
let Articulo= mongoose.model('Artículo',ArticulosDB);

const todoProd=async()=>{
    let articulosGuardados= await Articulo.find();
    return articulosGuardados
}

const eliminarUnProducto=async({tipoProducto,producto})=>{
    let resultado=await Articulo.deleteOne({tipoProducto:tipoProducto,producto:producto});
    return resultado
}

const actualizaUnProducto=async(_id,tipoProducto,producto,marca)=>{
  let resultado=await Articulo.updateOne({_id:_id},{$set:{tipoProducto:tipoProducto,producto:producto,marca:marca}});
  console.log("actualice"+resultado)
  return resultado
}

module.exports={todoProd,eliminarUnProducto,actualizaUnProducto}
// 