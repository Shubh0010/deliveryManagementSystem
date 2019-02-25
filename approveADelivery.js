/*
    this file controls status of a delivery
*/

const fs               = require('fs');                                                                                // importing required functions and classes from different files
const { askQuestions } = require('./ask');

function approveADelivery() {

    console.log("Do you want to")
    askQuestions([`1. Approve a particular Delivery 2. Approve all deliveries`                                         // askquestion is used for userInput
                 ]
    ).then((choice)=>{
            let adminChoice = parseInt(choice[0]);
            
            switch(adminChoice){
                case 1: console.log("-----------------------------------------------------")
                        console.log("Approve a particular Delivery:")                                                   
                        askQuestions(
                            ['Enter UserName',
                             'Enter ContactNumber'
                            ]
                        ).then((answer)=>{
                            fs.readFile('receipt.json','utf8', (err,data)=>{                                            // approving a particular delivery
                                if(err)
                                    console.log(err);
                                else{
                                    obj = JSON.parse(data);                                                             // now it is an object
                                    ary = obj.Data;                                                                     // ary is array of objects
                                    for(let i=0;i<ary.length;i++){
                                        if(ary[i].username==answer[0] && ary[i].contactNumber== answer[1]){
                                            obj.Data[i].status="Completed"
                                        }
                                    }
                                    json = JSON.stringify(obj);                                                          // convert it back to json
                                    fs.writeFileSync('receipt.json', json, 'utf8');                                      // write it back
                                    }
                            })    
                        })
                        break;
                    
                case 2: console.log("-------------------------------------------------------")
                        console.log("Completing Every Delivery.........")
                        fs.readFile('receipt.json','utf8', (err,data)=>{                                                 // approving all deliveries at once
                            if(err)
                                console.log(err);
                            else{
                                obj = JSON.parse(data);                                                                  // now it is an object
                                ary = obj.Data;
                                for(let objectIndex=0;objectIndex<ary.length;objectIndex++){
                                        obj.Data[objectIndex].status="Completed"
                                    }
                                }
                                json = JSON.stringify(obj);                                                              // convert it back to json
                                fs.writeFileSync('receipt.json', json, 'utf8');                                          // write it back
                        })
            }
        }
                    
        )
    }
                        

module.exports = {approveADelivery};