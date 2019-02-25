/*
    user can login using his credentials
*/ 

const { askQuestions }       = require('./ask');
const { userSignUp }         = require('./userSignUp')
const { statusOfDelivery }   = require('./statusOfDelivery')
const { bookDelivery }       = require('./bookDelivery')
const fs= require('fs');

function userLogin() {

    askQuestions([`Enter Username `,
                  'Enter Password ']
    ).then((answers)=>{

        let array = JSON.parse(fs.readFileSync('userInfo.json'));
        let data = array.Data;
        let length = data.length
        let flag=0;
        for(let checkItem=0;checkItem<length;checkItem++){
            if(answers[0]== data[checkItem].Username)
                if(answers[1]==data[checkItem].Password)
                    {
                        flag=1;
                        break;
                    }
        }
        if(flag){                                                                               //if user is valid he is given permission to either book a delivery or track status of delivery
            console.log(`Welcome ${answers[0]}`);
            console.log(`---------------------------`)
            askQuestions([`Enter: 
                           1. Booking a Delivery
                           2. Track Status
                        `]).then((choice)=>{
                console.log();
                let userChoice = parseInt(choice); 
                switch(userChoice){
                    case 1: console.log("Booking Delivery \n")
                            console.log("--------------------------")
                            bookDelivery(answers[0],answers[1]);
                            break;
                    case 2: console.log("Status Of Delivery \n")
                            console.log("--------------------------")
                            statusOfDelivery(answers[0]);
                            break;
                }
                
            })
        }            
        else{
            console.log(`Invalid User`)
            askQuestions(['Do you Want to Register : (Y/N)']).then((choice)=>{                                // if user is invalid he is asked if he needs to signup
                if(choice == 'Y' || choice == 'y' )
                    userSignUp();
                    
            })
        }
    console.log();
    
    })
}

module.exports = {userLogin}