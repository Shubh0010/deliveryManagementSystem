/*
    this file enables admin to delete a user 
*/
const fs               = require('fs');
const { askQuestions } = require('./ask');

function deletingAccounts() {

    console.log("Enter Credentials of the user you want to delete:")
    askQuestions([`Enter Username `,
                  'Enter Password ']
    ).then((answers)=>{

        fs.readFile('userInfo.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
                obj = JSON.parse(data);                                                                             // now it is an object
                ary = obj.Data;
                let indexOfElement = -1;
                for(let checkElement=0;checkElement<ary.length;checkElement++){                                     // iterating through every element to get the required element 
                    if(ary[checkElement].Username==answers[0] && ary[checkElement].Password==answers[1]){
                        indexOfElement = checkElement;
                        break;
                    }
                }
                if(indexOfElement>-1){
                    obj.Data.splice(indexOfElement,1)                                                               // delete some data
                    json = JSON.stringify(obj);                                                                     // convert it back to json
                    fs.writeFileSync('userInfo.json', json, 'utf8');                                                // write it back

                    console.log();
                    console.log(`Deletion Complete`)
                    console.log();
                }
                else{
                    console.log();
                    console.log(`User Not Availabe`)
                    console.log();
                        
                }
            }
        })
    }
    )}

module.exports = {deletingAccounts};