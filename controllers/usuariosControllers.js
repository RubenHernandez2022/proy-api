require('../database');
require('dotenv').config();
const passSeg=process.env.PASS_SEGURA;
const jwt=require("jsonwebtoken");
const bcrypt=require('bcrypt');

let mongoose= require('mongoose');
let UsuariosDB =require('../modelUsuarios');
let Usuario= mongoose.model('usuarios',UsuariosDB);

// solo para agregar un administrador------------------------------------------------------------
// const agregarUsuario=async(req,res)=>{
//     const {usuario,contraseña}=req.body
//     const passEncriptada= await bcrypt.hash(contraseña,10);

//     let doc= new Usuario({usuario:String,contraseña:String})
    
//     let unUsuario= new Usuario(
//        {
//         usuario:usuario,
//         contraseña:passEncriptada
//         //contraseña
//        }
//      )
//     doc.collection.insertOne(unUsuario)
//     .then((info)=>console.log(info))
//     .catch(err=>console.log(err))
//     //res.status(200).json(`producto cargada exitosamente, cargada por el usuario ${usuario}`); 
//     res.redirect("http://localhost:3000/Administrador")
    
//   };

const registrado=async(req,res)=>{
    const{usuario,contraseña}=req.body
    console.log("front:"+usuario)
    console.log("front:"+contraseña)
     //simulacion FRONT   
     //  const usuarioRegistrado={
     //    usuario:"admin",
     //    contraseña:"Admin123"
     //    usuario:"Carlos",
     //    contraseña:"Unipersonal"
     //  }
    if (usuario==="admin"||usuario==="Carlos"){
      const info=await Usuario.findOne({usuario});
      console.log("dbase:"+info.usuario)
      console.log("dbase:"+info.contraseña)
      //=>{}
      if(info===undefined){
           res.send("Usuario no esta registrado ")
      }else
      {
       //let info= data[0];

       console.log("front:"+usuario)
 
       console.log("dbase:"+info.usuario)
       //res.send("usuario ubicado")


        const contraseñaOk=await bcrypt.compare(contraseña,info.contraseña)//devuelve un booleano 
            if( contraseñaOk == true){
                console.log("contraseña correcta, se puede generar el token")
    
                //JWT
                //generar el token para devolverlo y que pueda usarlo para cargar una producto
                jwt.sign({usuario},passSeg,{expiresIn:'30m'},(error,token)=>{
                    if(error){
                        res.send(error);
                    }else{
                        res.json({
                            message:"usuario administrador",
                            tokenLogIn:token
                        });
                    }
                })
            }else{
                res.status(401).json({message:"contraseña incorrecta"})
            }
       }
    }else{
        res.status(204).json({message:"usuario no es administrador"})
    }
      
};

const verificacionUsuario=(req,res,next)=>{
    //tomar el token que nos trae la request y verificar si es la correcta;
    const authToken=req.headers.authorization;
    const token=authToken.split(" ").pop();//tomando al valor que viene en el header , separandolo y tomando solamente el token sin la plabra "Bearer"
    console.log(token);
    
     jwt.verify(token,process.env.PASS_SEGURA,(error,data)=>{
        if(error){
            if(error.name == "TokenExpiredError"){return res.send("Expiro el tiempo, por favor volver a logearse")}
            res.send(error)
        }else{
            console.log(data);//en esta data esta el payload que cargamos en el login cuando se creo el token
            req.auth=data.nombreUsuario;
            next()
            //next()continua con el resto del camino (otros middlewares o el controller, lo que este luego de la funcion en el router)
            //con eso, vamos a permitirle que continue con las demas instancias del router: cargar la imagen y cargar la info a la db.
          }
      });
  };



module.exports={registrado,verificacionUsuario}
//,agregarUsuario-----  para nuevo administrador