const UserService = require('./../app/services/UserService')

describe('Test for UserService',()=>{
    test("1. Create a new user using the UserService", ()=>{
        const user= UserService.create(1, "AjelandroMon", "Ajelandro")
        expect(user.username).toBe("AjelandroMon")
        expect(user.name).toBe("Ajelandro")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined
        
    })
    test("2. Get all user data in a list", ()=>{
        const user= UserService.create(1, "AjelandroMon", "Ajelandro")
        const userInfoInList = UserService.getInfo(user)
        console.log(userInfoInList)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("AjelandroMon")
        expect(userInfoInList[2]).toBe("Ajelandro")
        expect(userInfoInList[3]).toBe("Sin bio")
        
    })   
    test("3. Update username", ()=>{
        const user= UserService.create(1, "AjelandroMon", "Ajelandro")
        UserService.updateUserUsername(user, "AjelanMon")
        expect(user.username).toBe("AjelanMon")
        
    })   
     
    test("4. Given a list of users give me the list of usernames", ()=>{
        const user1= UserService.create(1, "AjelandroMon1", "Ajelandro")
        const user2= UserService.create(1, "AjelandroMon2", "Ajelandro")
        const user3= UserService.create(1, "AjelandroMon3", "Ajelandro")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("AjelandroMon1")
        expect(usernames).toContain("AjelandroMon2")
        expect(usernames).toContain("AjelandroMon2")
        
    })   
})