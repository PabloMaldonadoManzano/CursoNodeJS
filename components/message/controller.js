const store = require('./store.js')

function addMessage(user, message) {

    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[Messages controller] No hay usuario o mensaje')
            reject('Los datos son incorrectos')
            return false
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        store.addMessage(fullMessage)
        resolve(fullMessage)
    })
    
}

function getMessages(filterUser){
    return new Promise((resolve, reject) =>{
        resolve(store.getMessages(filterUser))
    })
}

function updateMessage(id, message){
    return new Promise( async (resolve, reject) =>{
        if(!id || !message){
            reject('[Update message] Datos insuficientes')
            return false
        }

        const result = await store.updateText(id, message)
        resolve(result)
    })
}

function deleteMessage(id){
    return new Promise((resolve, reject) =>{
        if(!id){
            reject('[delete message] Id required')
            return false
        }
        store.deleteMessage(id)
        .then((response) =>{
            resolve(response)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}