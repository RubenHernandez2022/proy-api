const articulos=[{
    tipoProd:"Materiales",
    producto:"Cemento",
    marca:"Loma Negra"
}
,{tipoProd:"Herramientas",
  producto:"pala",
  marca:"la mas"

}
,{
   tipoProd:"Materiales",
   producto:"Cal",
   marca:"Grobo"}
]

const atodoProd=(req,res)=>{
    let infoJson=JSON.stringify(articulos);//hasta q tga base de datos
    console.log(infoJson);
    res.send(infoJson);
};



const agregarunProd=(req,res)=>{
const {tipoProd}=req.body

    console.log(tipoProd)
    atodoProd.push({tipoProd:tipoProd})
    res.redirect("http://localhost:3000/")
};

module.exports={atodoProd,agregarunProd};
