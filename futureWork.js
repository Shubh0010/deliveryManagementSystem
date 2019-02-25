class FutureWork{
    
    constructor(demoArray=[], demoObject={}){                                                   // default value of arguments is set
        console.log('---------------------')
        this.demoArray=demoArray;
        this.demoObject=demoObject;
    }
    
    static greeting(){                                                                          // static method
        console.log("Welcome to Delivery Management Future ")
    }
    providingId(addId, ...arg){                                                                 // demo for providing id 
        this.demoArray = arg;
        const demoArrayMutable = this.demoArray;                                                // mutation
        demoArrayMutable.push(addId);
        return demoArrayMutable;
    }

    providingUserName( ...arg){
        
        let[,cno,uname] =  arg[0];                                                              // destructuring of Array
        console.log(cno);                                                       
        return `${uname}${cno}@jungleWorks`
    }
        
}


function demo() {
    const futureWork = new FutureWork([1,2,3,4,5]);
    
    FutureWork.greeting();                                                                       // as greeting is static method, we can call it directly
    
    let newObj={                                                                                        
            ...futureWork                                                                        // spread operator
        }

    console.log();
    console.log(`After using Spread Operator ${newObj}`)


    const ary = [11,11,4,5,22,11,22]
    let addElement = 1;
    futureWork.providingId( addElement, ary)
    
    console.log();
    console.log(futureWork.providingUserName( [1,45,"Shubham"] ))
        
    // function to restrict duplicate data
    const restrictingDuplicateDeliveries = (()=>{
    const exSet= new Set([1,1,2,3,4,5,63,432,2,1,1,]);
        
        console.log(`-------------`);
        console.log(`Diffrent functions that can be provided--`)

        console.log(`Adding an Item`)    
        exSet.add(11).add(33)
        
        console.log(`Adding an Item`)    
        exSet.delete(11)
        
        console.log(`Checking if item is there or not`)
        console.log(exSet.has(11));
        
        console.log(`size of our DataSet`)
        console.log(exSet.size)
        
        console.log(`Clearing our log`)
        exSet.clear();
        
        
    })();                                                                                             // making this function selfInvoking function
    
}    
        
demo();

    