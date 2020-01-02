const store = require('./store.js')

function addUser(name){
    if(!name){
        return Promise.reject('Invalid name')
    }
    const user = {
        name: name,
    }
    return store.addUser(user)
}

module.exports = {
    addUser,
}