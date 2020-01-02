const store = require('./store.js')

function getUsers(name){
    return new Promise((resolve, reject) =>{
        resolve(store.getUsers(name))
    })
}

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
    getUsers,
}