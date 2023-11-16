const express = require('express')  
const logger = require('morgan')

const app = express()
app.use(logger('dev'))
app.use(express.json())

 
const apiRouter = require('./routes/api')

app.use('/api',apiRouter)

module.exports = app

