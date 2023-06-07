require('dotenv').config();
let mongoose=require('mongoose');

//conexion local
// const server='127.0.0.1:27017';
// const database='BaseFerreteria';
// async function main() {
//     await mongoose.connect(`mongodb://${server}/${database}`)
// }

//conexion remota
const user=process.env.USER_DB;
const password=process.env.PASS_DB;

async function main() {
    await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.5qfuk3v.mongodb.net/?retryWrites=true&w=majority`)
};


main()
.then((respOk)=>{console.log("Conexion exitosa!!!")})
.catch((err)=>{console.log("Error en la conexion"+ err)})