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

const{todoProd,eliminarUnProducto,actualizaUnProducto}=require("../utiles/funcionesDB")

let mongoose= require('mongoose');
let ArticulosDB =require('../modelArticulos');
let Articulo= mongoose.model('Artículo',ArticulosDB);

const traerInfo=async(req,res)=>{
    let info= await todoProd();
    //  console.log("mostrar"+info);
    res.send(info);
};

const agregarUnProducto =(req,res)=>{
  const imagen="http://localhost:4000/public/"+req.file.filename;
  const {tipoProducto,producto,marca}=req.body
  // const usuario=req.auth;
  // console.log(req.auth)
  //--si utilizara un array
  // Articulos.push({TipoProd:tipoProducto,Producto:producto,Marca:marca})
  
  let doc= new Articulo({imagen:String,tipoProducto:String,producto:String,marca:String})
 
  let unArticulo= new Articulo(
    {
       imagen:imagen,
       tipoProducto:tipoProducto,
       producto:producto,
       marca:marca
    }
  )
  doc.collection.insertOne(unArticulo)
  .then((info)=>console.log(info))
  .catch(err=>console.log(err))
  //res.status(200).json(`producto cargada exitosamente, cagada por el usuario ${usuario}`); 
  res.redirect("http://localhost:3000/Administrador")
};

const eliminarProducto=async(req,res)=>{
  const {tipoProducto,producto}=req.body;
  let info= await eliminarUnProducto({tipoProducto,producto});
  console.log("borrar"+info);
  res.redirect("http://localhost:3000/FormuAgregar/Eliminar")                                                
 // res.send(info);
};

const actualizarArticulo=async(req,res)=>{
  //const id=req.params._id;
  //console.log("soy el id"+id)
  const {_id,tipoProducto,producto,marca}=req.body;
  console.log("este ACTUALIZO"+_id+tipoProducto+producto+marca)
  let info= await actualizaUnProducto(_id,tipoProducto,producto,marca);
 
  console.log(req.body)
  console.log("modificadoo")
  res.send("SOY PUT"+info)
  //res.redirect("http://localhost:3000/FormuAgregar"+info)
}

module.exports={agregarUnProducto,traerInfo,eliminarProducto,actualizarArticulo}
//,traerUsuario