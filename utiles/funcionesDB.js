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

  const actualizaUnProducto=async(filtro,{tipoProducto})=>{
   
      let resultado=await Articulo.updateOne(filtro,{$Set:{tipoProducto:tipoProducto}});
       console.log(resultado)
     return resultado
     
  }

module.exports={todoProd,eliminarUnProducto,actualizaUnProducto}
// ,actualizarUnProducto