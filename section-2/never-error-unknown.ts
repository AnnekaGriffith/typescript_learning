let userInput: unknown; //used over any because it has compiler 
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string')
    userName = userInput;

function generateError(message: string, code:number): never
{
    throw {message: message, errorCode: code};
    //while(true){}
}
    
generateError('An Error occurred', 500);
//console.log(result);