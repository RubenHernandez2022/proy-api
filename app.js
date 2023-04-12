const express= require(`express`);
const app=express();
const puerto=4000;
const {atodoProd,agregarunProd}=require("./controllers/adminControllers");

app.use(express.json());

app.get("./getatodoProd",atodoProd);


app.post("./Administrador",agregarunProd);



app.listen(puerto,()=>{
    console.log(`conectado al puerto ${puerto}`)
})
