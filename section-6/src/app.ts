//interface Admin
type Admin = {
    name: string;
    privileges: string[];
};//type definition

// interface Employee
type Employee = {
    name: string;
    startDate: Date;
};
//interface ElevatedEmployee extends Employee, Admin {};

type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee ={
    name:'Eric',
    privileges: ['create-server'],
    startDate: new Date()

}
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;//if two numbers it returns a number
function add(a: string, b: string): string; //if string it returns a string
// typescript will combine the knowledge of these two functions and create a function overload
function add(a: Combinable, b: Combinable){
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + ' ' + b.toString();
    }
    return a + b;
}
//const result = add('Max', 'Baker') as string; //can typescript into a string
const result = add('Max', 'Baker');
console.log(result);
let getresult = result.split(' ');// split 
console.log(getresult);

const fetchUserData = {
    id: 'u1',
    name: 'Mac',
    //job: {title: 'CEO', discription: 'My company' } //job might not be set yet
}
//console.log(fetchUserData?.job?.title); 
// this syntax avoids an error and will compile if it is there or not. this is an if check essentially.
const userInputNull = '';
const storedData = userInputNull || 'DEFAULT';
const storedData2 = userInputNull ?? 'DEFAULT'; // ?? is nullish coalescing
console.log(storedData);
console.log(storedData2);

type UnKnownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnKnownEmployee){
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) // in allows javascript to check if this is a property in emp.
    {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) // in allows javascript to check if this is a property in emp.
    {
        console.log('Privileges: ' + emp.startDate);
    }
    
}
printEmployeeInformation(e1);
printEmployeeInformation({name: 'Manny', startDate: new Date()});

class Car{
    drive() {
        console.log('Driving...');
    }
}

class Truck{
    drive() {
        console.log('Driving a truck...');
    }
    loadingCargo(amount: number){
        console.log('Loading cargo ...' + amount);
    }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function usedVehicle (vehicle: Vehicle){
    vehicle.drive();
    if (vehicle instanceof Truck){
        vehicle.loadingCargo(1000);
    }
}
usedVehicle(v1);
usedVehicle(v2);
interface Bird{
    type:'bird'
    flyingSpeed: number
}
interface Horse {
    type:'horse'
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at the speed of ' + speed + 'mph');
}
moveAnimal({type: 'bird', flyingSpeed: 56});

//type casting is useful when data is coming directly from teh dom and we know what data is expected. 
const paragraph = document.querySelector('p');
const paragraphId = <HTMLParagraphElement>document.getElementById('message-output');
const userInput = <HTMLInputElement>document.getElementById('user-input')!;// angle brackets can't be used in react
const userInputAgain = document.getElementById('user-input-again')! as HTMLInputElement; // ! says this will always have this item
const userInputNotThere = document.getElementById('element-not-there');
if(userInputNotThere){ // alternative way to check for input id 
    (userInputNotThere as HTMLInputElement).value = "I don't exist there";
}
userInput.value = 'Hi there!';
userInputAgain.value = 'Hi there again!';

interface ErrorContainer { //{email:'not a valid email: must start with character'}
    [prop: string]: string; 
    //this says you don't know the exact property name or 
    //property count, however the value of the property will be a string and returns a string
    //[prop: number]: string
}

const errorBay: ErrorContainer ={
    email: 'Not a valid email!',
    //1: 'Not a valid email!'
    userName: 'Must start with a Capital letter!'
};





