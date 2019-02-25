/*
    this files display user details to admin 
*/ 
const { userSignUp }        = require('./userSignUp')
const { askQuestions }      =   require('./ask');
const fs                    = require('fs');

class UserAccount{
    userAccount() {
        let array = JSON.parse(fs.readFileSync('userInfo.json'));
        let data = array.Data;
    
        console.log("All Users Information")
        console.log(`----------------------------------------------------------------------`)
        console.log(`----------------------------------------------------------------------`)
        console.log(`S.No. ${"UserName".padStart(33)} ${"Password".padStart(30)}`)
        console.log(`----------------------------------------------------------------------`)
        console.log(`----------------------------------------------------------------------`)
        let sno = 1;
        let map = new Map();                                                                                        // a map object is created to store key value pair
        for(let object of data){
            let uname=object.Username
            let password=object.Password
            map.set(uname,password)
            console.log(`${sno} ${uname.padStart(37)} ${map.get(uname).padStart(30)}`)
            console.log(`----------------------------------------------------------------------`)
            console.log();
            sno+=1;
        }
    };
}
    

module.exports = { UserAccount };