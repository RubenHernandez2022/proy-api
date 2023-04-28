let mongoose=require('mongoose');

const server='127.0.0.1:27017';
const database='BaseFerreteria';


async function main() {
    await mongoose.connect(`mongodb://${server}/${database}`)
}


main()
.then((respOk)=>{console.log("Conexion exitosa!!!")})
.catch((err)=>{console.log("Error en la conexion"+ err)})