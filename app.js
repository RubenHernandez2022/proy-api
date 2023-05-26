const express=require('express');
const {agregarUnProducto,traerInfo,eliminarProducto}= require('./controllers/adminControllers');
// ,agregarImagen
const cors =require('cors');
const app= express();
const puerto=4000;
const upload=require("./multer/cargarImagen")

app.use(express.json());
app.use(cors());// por si el navegador nos tira un error porque estamos queriendo consumir de un dominio a otro 
app.use(express.urlencoded({extended:true}))//para poder recibir la info de un formulario en formato de objeto 
app.use(("/public"),express.static("./imagenes"))



app.get('/pedirProducto',traerInfo);//peticion get que me traer a todos los articulos


app.post('/agregarProducto',upload.single('imagen'),agregarUnProducto);
//http://localhost:4000/agragarProducto

 //app.post('/cargarImagen',upload.single('imagen'),agregarImagen)

app.delete('/eliminarProducto',eliminarProducto,traerInfo);


app.listen(puerto,()=>{
    console.log(`Escuchando por el puerto  ${puerto}`)
    
});
// pedir los articulos -> get
// agregar articulos a la lista   -> post
