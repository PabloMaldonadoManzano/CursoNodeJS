const Model = require('./model.js')

function addMessage(message) {
    //list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

function getMessages(filterUser){
    //return list
    return new Promise((resolve, reject) =>{
        let filter = {}
        if(filterUser !== null){
            filter = {user: filterUser}
        }
    
        Model.find(filter)
        .populate('user')
        .exec((err, populated) =>{
            if(err){
                reject(err)
                return false
            }
            resolve(populated)
        })
    })    
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