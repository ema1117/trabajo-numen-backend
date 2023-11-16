const {check} = require('express-validator')

const checks = [
    check('Fecha')
        .notEmpty().withMessage('El campo fecha es requerido'),        
    check('Nombre')
        .notEmpty().withMessage('el campo Nombre es requerido')
        .isString().withMessage('el campo solo permite strings'),  
    check('Color')
        .notEmpty().withMessage('el campo Color es requerido')
        .isString().withMessage('el campo debe ser string'),
    check('Edad')       
        .isNumeric().withMessage('el campo solo permite Numeros'),  
]

module.exports = checks