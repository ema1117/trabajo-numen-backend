const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiControllers')
//const {validarID} = require('../middleware/validar')
const checks = require('../middleware/checks')
const { validarChecks} = require('../middleware/validarChecks') 
const { validarID } = require('../middleware/validar')


//ver una mascota por id 
router.get('/verMascota/:id',validarID,apiController.apiGetMascota)

//obtiene la lista de Mascotas
router.get('/mascotas',apiController.apiGet)

//inserto una mascota nueva
router.post('/nuevaMascota',checks,validarChecks,apiController.apiPost)

//editar un mascota
router.put('/editarMascota/:id',validarID,checks,validarChecks,apiController.apiPut)

//borrar una mascota
router.delete('/borrarMascota/:id',validarID,apiController.apiDelete)

//ver una api externa, en este caso la pokeapi, trae 
router.get('/verApi',apiController.apiExterna)


module.exports = router