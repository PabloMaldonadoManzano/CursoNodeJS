const express = require('express')
const router = express.Router()
const response = require('../network/response.js')

router.get('/', (req, res) => {
    //req.body -> lo que se manda en cuerpo
    //req.query -> lo que se manda por url
    //console.log(req.headers)
    //console.log(req.query)
    //console.log(req.body)

    res.header({
        'custome-header': 'Nuestro valor personalizado'
    })

    //res.send('Lista de mensajes')
    var message = "Lista de mensajes"
    response.sucess(req, res, message)
})

router.post('/', (req, res) => {
    console.log(req)
    //res.status(201).send({'error': '', 'body': 'Creado correctamente.' })
    if(req.query.error == "ok"){
        var message = "Error simulado"
        response.error(req, res, message, 500, 'Es solo una simulación de los errores')    
    }
    
    var message = "Creado correctamente"
    response.sucess(req, res, message, 201)
})

router.delete('/', (req, res) => {
    console.log(req)
    var message = "Eliminado correctamente"
    response.sucess(req, res, message)
})

module.exports = router
