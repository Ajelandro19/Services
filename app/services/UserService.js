
const User = require('./../modules/user')
class UserService{
    static create(id, username, name){
        return new User(id, username,name, "Sin bio")
    }
    static getInfo(user){
        const userInfoInList=[user.id, user.username,user.name, "Sin bio"]
        return userInfoInList
    }
    static updateUserUsername (user,text){
        return user.username=text
    }
}

module.exports =UserService