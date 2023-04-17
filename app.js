const express=require('express');
const {todoProd,agregarUnProducto} = require('./controllers/adminControllers');
const cors =require('cors');
const app= express();
const puerto=4000;

app.use(express.json());
app.use(cors());// por si el navegador nos tira un error porque estamos queriendo consumir de un dominio a otro 
app.use(express.urlencoded({extended:true}))//para poder recibir la info de un formulario en formato de objeto 


app.get('/pedirProducto',todoProd);//peticion get que me traer a todos los articulos


app.post('/agregarProducto',agregarUnProducto);
//http://localhost:4001/addarticulo

app.listen(puerto,()=>{
    console.log(`Escuchando por el puerto  ${puerto}`)
    
});
// pedir los articulos -> get
// agregar articulos a la lista   -> post
