const express = require('express')
var app = express()
const router = require('./network/routes.js')

const db = require('./db')
db('mongodb+srv://teleground_user:0Zv9aljrnlWqegvX@cluster0-pz1qw.mongodb.net/teleground?retryWrites=true&w=majority')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.use(router)
router(app)

app.use('/app', express.static('public'))

app.listen(3000)

console-console.log('La aplicación está escuchando en http://localhost:3000');
