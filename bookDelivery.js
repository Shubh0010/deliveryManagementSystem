const { askQuestions }    = require('./ask');                                                                  
const { BookInformation } = require('./bookInformation');
const fs                  = require('fs');

function bookDelivery(username= 'Anonymous', password){
    console.log("Hello "+ username)

    askQuestions([`Enter Item Name `,
                  'Enter Shop Name ',
                  `Enter Shop Address`,
                  'Enter Contact Number',
                  `Enter Price`
                 ]
    ).then((answers)=>{

        fs.readFile('receipt.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
                obj = JSON.parse(data);                                                                                                     // now it is an object
                bookInfo = new BookInformation(username, answers[0], answers[1], answers[2], answers[3], answers[4], status="Pending");
                obj.Data.push(bookInfo);                                                                                                    // add some data
                json = JSON.stringify(obj);                                                                                                 // convert it back to json
                fs.writeFileSync('receipt.json', json, 'utf8');                                                                             // write it back to file

                console.log();
                console.log(`Delivery on Process.........`)
                console.log();
            }
        });

    }).catch((error)=>{
        console.log(error)
       })
}

module.exports = {bookDelivery}
