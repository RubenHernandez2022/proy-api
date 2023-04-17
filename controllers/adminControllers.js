// info  de una Base de Datos

const Articulos=[
  {
     TipoProd:"Materiales",
     Producto:"Cemento",
     Marca:"Loma Negra"
  }
 ,{
     TipoProd:"Herramientas",
     Producto:"pala",
     Marca:"la mas"
  }
 ,{
    TipoProd:"Materiales",
    Producto:"Cal",
    Marca:"Grobo"
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

  const {tipoProd,producto,marca}=req.body// de toda la info del formulario, input
  console.log(tipoProd)
  Articulos.push({TipoProd:tipoProd,Producto:producto,Marca:marca})
  console.log(Articulos)

// res.send(" nombre articulo recibido")
  res.redirect("http://localhost:3000/")
  
};


module.exports={todoProd,agregarUnProducto}
