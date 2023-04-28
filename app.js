const express=require('express');
const {todoProd,agregarUnProducto} = require('./controllers/adminControllers');
const cors =require('cors');
const app= express();
const puerto=4000;
//base de datos---------------------------------------------
// require('./database');
// let mongoose= require('mongoose');
// let Articulos =require('./modelArticulos');
// let Articulo= mongoose.model('Artículo',Articulos);

// let doc= new Articulo({tipoProd:String})
// console.log({doc})
// let unArticulo= new Articulo(
//     {tipoProd:"herramienta",
//      Producto:"SERRUCHO",
//      Marca:"5260"}
// )


// //usando insertOne

// doc.collection.insertOne(unArticulo)
// .then((info)=>console.log(info))
// .catch(err=>console.log(err))
//-------------------------------------------------------------

app.use(express.json());
app.use(cors());// por si el navegador nos tira un error porque estamos queriendo consumir de un dominio a otro 
app.use(express.urlencoded({extended:true}))//para poder recibir la info de un formulario en formato de objeto 


app.get('/pedirProducto',todoProd);//peticion get que me traer a todos los articulos


app.post('/agregarProducto',agregarUnProducto);
//http://localhost:4000/agragarProducto

app.listen(puerto,()=>{
    console.log(`Escuchando por el puerto  ${puerto}`)
    
});
// pedir los articulos -> get
// agregar articulos a la lista   -> post
