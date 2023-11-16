const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('strictQuery',false);

//funcion para conectar a la bd
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CCN)
        console.log('se coneto a la bd')
    }catch{
        console.log('Problema para conectar a la BD')
    }

}

module.exports = {connect}