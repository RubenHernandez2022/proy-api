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
const{todoProd,eliminarUnProducto}=require("../utiles/funcionesDB")
let mongoose= require('mongoose');
let ArticulosDB =require('../modelArticulos');
let Articulo= mongoose.model('Artículo',ArticulosDB);


const traerInfo=async(req,res)=>{
     let info= await todoProd();
     console.log("mostrar"+info);
     res.send(info);
};


const agregarUnProducto =(req,res)=>{
   
   const imagen="http://localhost:4000/public/"+req.file.filename;
   const {tipoProducto,producto,marca}=req.body// de toda la info del formulario, input
   //--si utilizara un array
   // Articulos.push({TipoProd:tipoProducto,Producto:producto,Marca:marca})
   console.log(req.body)
    console.log(imagen)
   let doc= new Articulo({imagen:String,tipoProducto:String,Producto:String,Marca:String})
  
   let unArticulo= new Articulo(
      {
       imagen:imagen,
       tipoProducto:tipoProducto,
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

//  const agregarImagen=(req,res)=>{
    
//    console.log(req.file)
//    const imagen="http://localhost:4000/public/"+req.file.filename
//   //  res.send("foto cargada")
//   // res.send("http://localhost:3000/")
 
//   console.log(imagen)
//  let doc= new Articulo({imagen:String})

//  let unArticulo= new Articulo(
//     {
//      imagen:imagen
//     }
//   )
//  doc.collection.insertOne(unArticulo)
// .then((info)=>console.log(info))
// .catch(err=>console.log(err))
// // res.send(" nombre articulo recibido")
//  res.redirect("http://localhost:3000/")

// }

const eliminarProducto=async(req,res)=>{
  let info= await eliminarUnProducto();
  console.log("borrar"+info);
  res.send(info);
};


module.exports={agregarUnProducto,traerInfo,eliminarProducto}
//,agregarImagen