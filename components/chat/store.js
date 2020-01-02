const Model = require('./model.js')

function addChat(chat){
    const myChat = new Model(chat)
    return myChat.save()
}

function listChats(userId){
    return new Promise((resolve, reject)=>{
        let filters = {}
        if(userId != null){
            filters = {
                users: userId,
            }
        }
        Model.find(filters)
        .populate('users')
        .exec((err, populated) =>{
            if(err){
                reject(err)
                return false
            }
            resolve(populated)
        })
    })
}