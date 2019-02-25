/*
    this file creates a new login 
*/

const { askQuestions } = require('./ask');
const fs               = require('fs');

function userSignUp(){

    askQuestions([`Enter Username `,
                  'Enter Password ']
    ).then((answers)=>{

        fs.readFile('userInfo.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
                obj = JSON.parse(data);                                                                         //now it is an object
                obj.Data.push({Username: answers[0], Password: answers[1]});                                    //add some data
                json = JSON.stringify(obj);                                                                     //convert it back to json
                fs.writeFileSync('userInfo.json', json, 'utf8');                                                // write it back

                console.log();
                console.log(`ThankYou for Registering with us ${answers[0]}`)
                console.log();
            }
        });

    }).catch((error)=>{
        console.log(error)
    })
}

module.exports ={ userSignUp }