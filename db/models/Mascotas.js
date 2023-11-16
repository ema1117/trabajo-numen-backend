const {Schema,model} = require('mongoose')

const schema = new Schema({

    Fecha:{
        type:Date,
        required:true
    },
    Nombre:{
        type:String,
        required:true
    },
    Raza:{
        type:String,      
    },  
    Tamaño:{
        type:String,
        required:true,
        enum:['Chico','Mediano','Grande']
    },
    Color:{
        type:String,
        required:true
    },
    Edad:{
        type:Number,
        required:true
    },
    Especie:{
        type:String,
        required:true,
        enum:['Perro','Gato','Raton','Ave','Otro']
    },
    Sexo:{
        type:String,
        required:true,
        enum:['Hembra','Macho']
    },
    Observaciones:{
        type:String,
        
    }

})




const Mascota = model('Mascota',schema) // colection == alumnos

module.exports = {Mascota}