// info  de una Base de Datos

const Articulos=[
  {
     TipoProd:"Materiales",
     Producto:"Cemento",
     Marca:"Loma Negra",
     Imagen:"./imagenes/cemento loma-negra.jpg"
  }
 ,{
     TipoProd:"Herramientas",
     Producto:"pala",
     Marca:"la mas",
     Imagen:"./imagenes/pala.jpg"
  }
 ,{
    TipoProd:"Materiales",
    Producto:"Cal",
    Marca:"Santa Barbara",
    Imagen:"./imagenes/cal santa-barbara.jpg"
  }
 ]
/*---------------*/


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

// res.send(" nombre articulo recibido")
  res.redirect("http://localhost:3000/")
  
};


module.exports={todoProd,agregarUnProducto}
