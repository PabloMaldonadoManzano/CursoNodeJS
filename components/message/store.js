const Model = require('./model.js')

function addMessage(message) {
    //list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages(filterUser){
    //return list
    let filter = {}
    if(filterUser !== null){
        filter = {user: filterUser}
    }
    const messages = await Model.find(filter)
    return messages
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id:id
    })
    foundMessage.message = message
    const newMesage = await foundMessage.save()
    return newMesage
}

function deleteMessage(id){
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateText,
    deleteMessage,
}