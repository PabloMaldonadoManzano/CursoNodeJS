const Model = require('./model.js')

async function getUsers(name){
    let userFilter = {}
    if(name != null){
        userFilter = {
            name: name
        }
    }
    const users = await Model.find(userFilter)
    return users
}

function addUser(user){
    const myUser = new Model(user)
    return myUser.save()
}

module.exports = {
    getUsers,
    addUser,
}