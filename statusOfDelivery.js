/*
    this file checks the status of a delivery
*/

const fs               = require('fs');
const { askQuestions } = require('./ask');

function statusOfDelivery(Username) {
    console.log('Check For Delivery Status')
    askQuestions([`Enter Contact Number`
    ]).then((answer) => {
        console.log();
        let uname = Username
        let contactno = answer[0];
        let array = JSON.parse(fs.readFileSync('receipt.json'));
        let data = array.Data;
        let length = data.length
        let flag = 0;
        for (let currentItem = 0; currentItem < length; currentItem++) {
            if (uname == data[currentItem].username && contactno == data[currentItem].contactNumber) {
                console.log(`
                             UserName       : ${data[currentItem].username}
                             ---------------------------------------------------------------------------------------------------------------------    
                             ItemName       : ${data[currentItem].itemname}
                             ---------------------------------------------------------------------------------------------------------------------    
                             Shop           : ${data[currentItem].shopName}, ${data[currentItem].shopAddress} 
                             ---------------------------------------------------------------------------------------------------------------------
                             ContactNumber  : ${data[currentItem].contactNumber}
                             ---------------------------------------------------------------------------------------------------------------------    
                             Price          : ${data[currentItem].price}
                             ---------------------------------------------------------------------------------------------------------------------    
                             Status         : ${data[currentItem].status}
                             ---------------------------------------------------------------------------------------------------------------------    
                                             
                            `)
                flag = 1;
                break;
            }
        }
        if (flag == 0)
            console.log("Invalid Delivery Details")

    })



};

module.exports = { statusOfDelivery };