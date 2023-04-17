//la info va a venir de una Base de Datos

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

 // res.status(200) -> valor por defecto, le respondo un estado OK
 //formato ? json
 let infoJSON=JSON.stringify(Articulos)//alterando students para que se envie en formato JSON
 console.log(infoJSON)
 res.send(infoJSON)
};

const agregarUnProducto =(req,res)=>{

  const {tipoProd,producto,marca}=req.body// de toda la info del formulario, solo me estoy guardando en una variable "nombre" , el valor del input de name "nombre"
  console.log(tipoProd)
  Articulos.push({TipoProd:tipoProd,Producto:producto,Marca:marca})
  console.log(Articulos)
//responder algo ..  salio todo ok -> rediriga a una peticion del front .
// res.send(" nombre del estudiante recibido")
  res.redirect("http://localhost:3000/")
  //res.status(200).massege("sdhfkjshd") .send(mandarDatos) .redirect()
};


module.exports={todoProd,agregarUnProducto}
