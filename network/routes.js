const express = require('express')
const message = require('../components/network')

const routes = function( server ){
    server.use('/message', message)
}

module.exports = routes