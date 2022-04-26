
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
    static getAllUsernames([user1, user2, user3]){
        return [user1.username, user2.username, user3.username] 
    }
}

module.exports =UserService