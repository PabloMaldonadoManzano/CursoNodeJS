const express = require('express')
const response = require('../../network/response.js')
const controller = require('./controller.js')
const router = express.Router()

router.get('/', (req, res) =>{
    const usersFilters = req.query.nombre || null
    controller.getUsers(usersFilters)
    .then((data) =>{
        response.success(req, res, data, 201)
    })
    .catch( err =>{
        response.error(req, res, 'Error interno', 500, err)
    })
})

router.post('/', (req, res) =>{
    controller.addUser(req.body.name)
    .then((data) =>{
        response.success(req, res, data, 201)
    })
    .catch((err) =>{
        response.error(req, res, 'Error interno', 500, err)
    })
})

module.exports = router