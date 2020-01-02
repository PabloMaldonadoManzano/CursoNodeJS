const express = require('express')
const router = express.Router()
const response = require('../../network/response.js')
const controller = require('./controller.js')

/* Example
router.get('/', (req, res) => {
    //req.body -> lo que se manda en cuerpo
    //req.query -> lo que se manda por url
    //console.log(req.headers)
    //console.log(req.query)
    //console.log(req.body)

    /*res.header({
        'custome-header': 'Nuestro valor personalizado'
    })

    //res.send('Lista de mensajes')

    controller.getMessages()
    .then((messageList) =>{
        response.success(req, res, messageList, 201)
    })
    .catch((error) =>{
        response.error(req, res, "Unexpected Error", 500, error)    
    })

}) */


router.get('/', (req, res) => {

    const filterMessages = req.query.user || null
    controller.getMessages(filterMessages)
    .then((messageList) =>{
        response.success(req, res, messageList, 201)
    })
    .catch((error) =>{
        response.error(req, res, "Unexpected Error", 500, error)    
    })

})

router.post('/', (req, res) => {
    //res.status(201).send({'error': '', 'body': 'Creado correctamente.' })
    var body = req.body
    controller.addMessage(body.chat, body.user, body.message)
    .then((data)=>{
        response.success(req, res, data, 201)
    }).catch((error) =>{
        response.error(req, res, "información invalida", 400, 'Es solo una simulación de los errores')    
    })
})

router.patch('/:id', (req, res) =>{
    controller.updateMessage(req.params.id, req.body.message)
    .then(()=>{
        response.success(req, res, "Mensaje Actualizado correctamente", 201)
    })
    .catch((error) =>{
        response.error(req, res, "información invalida", 500, error)    
    })
    
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
    .then(()=>{
        response.success(req, res, "Mensaje Eliminado correctamente", 201)
    })
    .catch((error) =>{
        response.error(req, res, "información invalida", 500, error)    
    })
})

module.exports = router
