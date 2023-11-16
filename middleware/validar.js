 const {Mascota} = require('../db/models/Mascotas')

// funcion para validar que el id exista
const validarID = async (req,res,next) =>{
    try {
        const buscar = await Mascota.findById(req.params.id)
        if(buscar !== null){
            next()
        }else{
            res.status(400).json({
                msg: 'el id ' + req.params.id + 'es invalido'
            })
        }


    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = {validarID}