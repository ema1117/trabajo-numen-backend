const {Mascota} = require('../db/models/Mascotas') 

const apiController = {

    //busca los datos de una mascota
    async apiGetMascota(req,res){
        const verMascota = await Mascota.findById(req.params.id)
        res.json(verMascota)
    },
    
    //trae el listado de las mascotas
    async apiGet(req,res){
        const listadoMascotas = await Mascota.find()
        res.json(listadoMascotas)
    },

    //inserta un registro nuevo de mascota
    async apiPost(req,res){
        try{
            const nuevaMascota = new Mascota(req.body)
            await nuevaMascota.save()
            res.status(201).json(nuevaMascota)
        }catch(error){
            res.status(400).json(error)
        }
    },

    //actualiza una mascota
    async apiPut(req,res){
        await Mascota.findByIdAndUpdate(req.params.id,req.body)
        const editado = await Mascota.findById(req.params.id)
        res.status(201).json(editado)
    },

    //borra una mascota
    async apiDelete(req,res){
        await Mascota.findByIdAndDelete(req.params.id)
        res.status(200).send('se borro la Mascota')
    },
    
    //ver api externa, trae los 10 primeros poquemones
    async apiExterna(req,res){        
            await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
            .then(response => response.json())
            .then(data => {
                 return res.json(data)
            }).catch(error => {
                console.log(error);
            })
                
    } 
} 


module.exports = apiController