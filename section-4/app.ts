const User = "max";
//User = "king";
let age :any = 30;
age = "j";

function add(a:number , b: number){
    var result;
    result = a + b;
    return result;
}


// if (age > 20){
//     var isOld = true; 
// }
// console.log(isOld);
// this works in javascript with no errors


// if (age > 20){
//     let isOld = true; 
// }
// console.log(isOld);
// this doesn't works in javascript. Error happens here. 

const adding = (a: number, b: number) => {
    return a + b;
}
//this is another way to make a function. 
//takes two parameters a:number and b:number.
//this performs the return a+b. return is NOT implicit.

const adding2 = (a: number, b: number) => a + b;
//another way to use the arrow function. this can be used 
//if and only if has one expression. return is implicit.

const printOut: (a: string | number) => void = output =>  console.log(output);
//another way to use arrow functions. 
//(a: string | number) => void is the function typing
//It is outlined after the constant printout and notice 
//the return type is declared. this declaration type is handy for buttons.
//see button function example below:

const button1 = document.querySelector('button');
if (button1){
    button1.addEventListener('click', event => console.log(event)); 

}

const adding3 = (a: number, b: number = 1) => {
    return a + b;
}
//this function allows b to have a default value in case 
//only one parameter is passed.

const hobbies = ["hockey","painting"];
const activeHobbies = ["pickling"];

activeHobbies.push(...hobbies);
//this pushes the array and adds the values of another array. 
// spread operator is teh name used for  ...
// another example of the way to use teh spread
const activeHobbies2 = ["pickling", ...hobbies];

const person = {
    name: "Max",
    age: 10
};


const coppiedPerson = person; // this is a pointer to person
const coppiedPerson2 = {...person}; //this is a true copy
person.age = 50;

const activeHobbies3 = [person]; 

activeHobbies3.push({...coppiedPerson2});
activeHobbies3.push(coppiedPerson2); //still points to coppiedPerson2
coppiedPerson2.age = 30;

const addRest = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    },0);
};
const addingnums = addRest(1,2,3.3,4,5);

//numbers copies the numbers in array of numbers being sent to 
//addRest which then returns the sum of the numbers in the array 
//by using the reduce method which woks like a for loop. Reduce 
//performs an operation on an array and returns the result. So 
//you provide a function and a starting value. 
//ex: nums.reduce(() => {},0);
const addRestTuples = (...numbers: [number, number, number]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    },0);
};
const addingnum = addRestTuples(1,2,3.3);

//this works with tuples as well in case you know haw many elements are 
//being sent in. 

console.log(adding(2,5));
console.log(adding2(2,5));
console.log(printOut(2));
console.log(adding3(2));
console.log(adding3(2,3));
console.log(activeHobbies);
console.log(activeHobbies2);
console.log("person: " +  person.name  + " " +  person.age + " copiedPerson: " + coppiedPerson.age + " " + coppiedPerson.name + " copiedPerson2: " + coppiedPerson2.age  + " " + coppiedPerson2.name);
const {name: UserName, age: UserAge } = person;
console.log ("person: " + UserName, UserAge);
const {name: UserName1, age: UserAge1 } = coppiedPerson;
console.log ("person copied: " + UserName1, UserAge1);
const {name: UserName2, age: UserAge2 } = coppiedPerson2;
console.log ("true copy person: " + UserName2, UserAge2);

console.log(activeHobbies3[1]); //true copy
console.log(activeHobbies3[2]); //pointer copy
console.log("sum : " + addingnums);
console.log("sum : " + addingnum);

const [h1, h2, ...remainingHobbies] = activeHobbies;
console.log("original = " + activeHobbies, " destructed: " + h1, h2, " remaining: " + remainingHobbies);
