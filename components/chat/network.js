const express = require('express')
const response = require('../../network/response.js')
const controller = require('./controller.js')
const router = express.Router()

router.post('/', (req, res) =>{
    controller.addChat(req.body.users)
    .then(data =>{
        response.success(req, res, data, 201)
    })
    .catch(err=>{
        response.error(req, res, 'Internal error', 500, err)
    })
})

router.get('/:userId', (req, res) =>{
    controller.listChats(req.params.userId)
    .then(data =>{
        response.success(req, res, data, 201)
    })
    .catch( err =>{
        response.error(req, res, 'Internal error', 500, err)
    })
})


module.exports = router