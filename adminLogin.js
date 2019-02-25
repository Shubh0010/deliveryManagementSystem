/*
    admin control
    this file is for manipulation of deliveries by admin 
*/

const { askQuestions }     = require('./ask');                                                          // importing required functions and classes from different files
const { UserAccount }      = require('./userAccounts');
const { deletingAccounts } = require('./deletingAccount')
const { statusOfDelivery } = require('./statusOfDelivery')
const { approveADelivery } = require('./approveADelivery')

const fs = require('fs');

function adminLogin() {
    askQuestions([`Enter Username `,                                                                    // credentials needed for login
        'Enter Password ']
    ).then((credentials) => {

        var dataFromFile = JSON.parse(fs.readFileSync('./adminInfo.txt'));                              // parsing the file to make information readable for usuability

        if (dataFromFile.username == credentials[0] && dataFromFile.password == credentials[1]) {       // if credentials are correct then Proceed
            console.log("Welcome Admin!")
            console.log('-------------------------------');
            askQuestions([
                          `Enter: 
                           1. User Accounts
                           2. Delete Account
                           3. Approving a Delivery
                           4. Status of a Delivery`]).then((choice) => {                                // askQuestions is used to take user Input
                console.log();
                let adminChoice = parseInt(choice);                                                     // as choice is of object type we want to convert it to Integer
                switch (adminChoice) {
                    case 1: console.log("userAccounts \n")
                            console.log("--------------------------")
                            const userAcc = new UserAccount();
                            userAcc.userAccount();
                            break;
                    case 2: console.log("Removing an User \n")
                            console.log("--------------------------")
                            deletingAccounts();
                            break;
                    case 3: console.log("Approve Delivery \n")
                            console.log("--------------------------")
                            approveADelivery();
                            break;
                    case 4: console.log("Status of the delivery \n")
                            console.log("--------------------------")
                            askQuestions([`Enter Users Name`]).then((ans) => {
                            statusOfDelivery(ans[0]);
                        })
                        break;

                }

            })
        }

        else                                                                                             // if credentials are wrong -- exit
            console.log("Invalid Admin")
        console.log()
    }).catch((error) => {                                                                                // incase the promise gets rejected
        console.log(error)
    }
    )
}

module.exports = { adminLogin }