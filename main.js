/*
    this page is our main page which shows analogy to UserInterface 
*/

  const { askQuestions } = require('./ask');
  const { adminLogin }   = require('./adminLogin');
  const { userLogin }    = require('./userLogin')
  const { userSignUp }   = require('./userSignUp')
  
  askQuestions([`                                                                                          
  Enter 
  1: Admin Login  
  2: User Login  
  3: User Signup
  
  `]
  )
      .then(answers => {
          let choice = parseInt(answers[0].trim());
          console.log();
          switch(choice){
                case 1: console.log('Admin Login');
                        console.log('-------------')
                        adminLogin();
                        break;
                case 2: console.log('User Login');
                        console.log('-------------')
                        userLogin();
                        break;
                case 3: console.log('User SignUp');
                        console.log('-------------')
                        userSignUp();
                        break;
                
                default: console.log('Invalid Choice!! Please Try Again!!')
          }
      });