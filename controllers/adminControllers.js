// info  de una Base de Datos

// const Articulos=[
//   {
//      TipoProd:"Materiales",
//      Producto:"Cemento",
//      Marca:"Loma Negra",
//      Imagen:"./imagenes/cemento loma-negra.jpg"
//   }
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
//  ]
/*---------------*/
//desde un array ficticio 
//const todoProd=(req,res)=>{
// res.status(200) -> valor por defecto,estado OK
//let infoJSON=JSON.stringify(Articulos)se envie en formato JSON
//  console.log(infoJSON)
// res.send(infoJSON)//};

require('../database');
const{todoProd}=require("../utiles/funcionesDB")
let mongoose= require('mongoose');
let ArticulosDB =require('../modelArticulos');
let Articulo= mongoose.model('Artículo',ArticulosDB);





const traerInfo=async(req,res)=>{
     let info= await todoProd();
     console.log("mostrar"+info);
     res.send(info);
};


const agregarUnProducto =(req,res)=>{
  
   const {tipoProducto,producto,marca}=req.body// de toda la info del formulario, input
 //--si utilizara un array
  // Articulos.push({TipoProd:tipoProducto,Producto:producto,Marca:marca})
  
  
 let doc= new Articulo({tipoProducto:String,Producto:String,Marca:String})

 let unArticulo= new Articulo(
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


module.exports={agregarUnProducto,traerInfo}
