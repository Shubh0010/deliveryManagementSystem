const readline = require('readline');

const AskQuestion = (rl, question) => {                                                                         
    return new Promise(resolve => {                                                                     
        rl.question(question, (answer) => {
            resolve(answer);                                                                             
        });
    });
}

const Ask = async function(questions) {
   // it wont run until promise is resolved                                                          
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let results = [];
        for(let i=0;i < questions.length;i++) {
            const result = await AskQuestion(rl, questions[i]);                                     // await won't let the next line to run until this line completely executes 
            results.push(result);
        }
        rl.close();
        return results;
}

module.exports = { askQuestions: Ask }
