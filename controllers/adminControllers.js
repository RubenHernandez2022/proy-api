// info  de una Base de Datos

const Articulos=[
  {
     TipoProd:"Materiales",
     Producto:"Cemento",
     Marca:"Loma Negra",
     Imagen:"./imagenes/cemento loma-negra.jpg"
  }
//  ,{
//      TipoProd:"Herramientas",
//      Producto:"pala",
//      Marca:"la mas",
//      Imagen:"./imagenes/pala.jpg"
//   }
//  ,{
//     TipoProd:"Materiales",
//     Producto:"Cal",
//     Marca:"Santa Barbara",
//     Imagen:"./imagenes/cal santa-barbara.jpg"
//   }
 ]
/*---------------*/
require('../database');
 let mongoose= require('mongoose');
 let ArticulosDB =require('../modelArticulos');
 let ArticuloDB= mongoose.model('Artículo',ArticulosDB);

const todoProd=(req,res)=>{

 // res.status(200) -> valor por defecto,estado OK

 let infoJSON=JSON.stringify(Articulos)// se envie en formato JSON
 console.log(infoJSON)
 res.send(infoJSON)
};



const agregarUnProducto =(req,res)=>{

  const {tipoProducto,producto,marca}=req.body// de toda la info del formulario, input
 
  Articulos.push({TipoProd:tipoProducto,Producto:producto,Marca:marca})
  console.log(Articulos)
  
  let doc= new ArticuloDB({tipoProducto:String,Producto:String,Marca:String})

 let unArticulo= new ArticuloDB(
    {tipoProducto:tipoProducto,
      Producto:producto,
      Marca:marca
    }
 )
 doc.collection.insertOne(unArticulo)
.then((info)=>console.log(info))
.catch(err=>console.log(err))

// res.send(" nombre articulo recibido")
  res.redirect("http://localhost:3000/")
  
};


module.exports={todoProd,agregarUnProducto}
