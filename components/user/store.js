const Model = require('./model.js')

function addUser(user){
    const myUser = new Model(user)
    return myUser.save()
}

module.exports = {
    addUser,
}