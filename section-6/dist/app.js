"use strict";
const e1 = {
    name: 'Eric',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + ' ' + b.toString();
    }
    return a + b;
}
const result = add('Max', 'Baker');
console.log(result);
let getresult = result.split(' ');
console.log(getresult);
const fetchUserData = {
    id: 'u1',
    name: 'Mac',
};
const userInputNull = '';
const storedData = userInputNull || 'DEFAULT';
const storedData2 = userInputNull !== null && userInputNull !== void 0 ? userInputNull : 'DEFAULT';
console.log(storedData);
console.log(storedData2);
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Privileges: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Manny', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadingCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function usedVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadingCargo(1000);
    }
}
usedVehicle(v1);
usedVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at the speed of ' + speed + 'mph');
}
moveAnimal({ type: 'bird', flyingSpeed: 56 });
const paragraph = document.querySelector('p');
const paragraphId = document.getElementById('message-output');
const userInput = document.getElementById('user-input');
const userInputAgain = document.getElementById('user-input-again');
const userInputNotThere = document.getElementById('element-not-there');
if (userInputNotThere) {
    userInputNotThere.value = "I don't exist there";
}
userInput.value = 'Hi there!';
userInputAgain.value = 'Hi there again!';
const errorBay = {
    email: 'Not a valid email!',
    userName: 'Must start with a Capital letter!'
};
//# sourceMappingURL=app.js.map