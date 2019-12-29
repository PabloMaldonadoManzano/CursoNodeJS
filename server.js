const express = require('express')
//const router = require('./components/network.js')
const router = require('./network/routes.js')
var app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.use(router)
router(app)

app.use('/app', express.static('public'))

app.listen(3000)

console-console.log('La aplicación está escuchando en http://localhost:3000');

