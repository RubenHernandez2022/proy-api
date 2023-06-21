require('dotenv').config();
const express=require('express');
const cors =require('cors');
const app= express();

const puerto=process.env.PORT || 5000;
const upload=require("./multer/cargarImagen")
const {agregarUnProducto,traerInfo,eliminarProducto,actualizarArticulo}= require('./controllers/adminControllers');
const {registrado,verificacionUsuario}=require("./controllers/usuariosControllers")
//agregarUsuario,

app.use(express.json());
app.use(cors());// por si el navegador nos tira un error porque estamos queriendo consumir de un dominio a otro 
app.use(express.urlencoded({extended:true}))//para poder recibir la info de un formulario en formato de objeto 
app.use(("/public"),express.static("./imagenes"))


//app.post("/AgregarUsuario",agregarUsuario)

app.post('/login',registrado,verificacionUsuario)


app.get('/pedirProducto',traerInfo);//peticion get que me traer a todos los articulos

app.post('/agregarProducto',upload.single('imagen'),agregarUnProducto);
// ,verificacionUsuario
app.delete('/eliminarProducto',eliminarProducto,traerInfo);

app.put("/modifArticulo/:_id",actualizarArticulo)

app.listen(puerto,()=>{
    console.log(`Escuchando por el puerto  ${puerto}`)
});

// pedir los articulos -> get
// agregar articulos a la lista   -> post
