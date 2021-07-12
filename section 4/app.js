"use strict";
const User = "max";
let age = 30;
age = "j";
function add(a, b) {
    var result;
    result = a + b;
    return result;
}
const adding = (a, b) => {
    return a + b;
};
const adding2 = (a, b) => a + b;
const printOut = output => console.log(output);
const button1 = document.querySelector('button');
if (button1) {
    button1.addEventListener('click', event => console.log(event));
}
const adding3 = (a, b = 1) => {
    return a + b;
};
const hobbies = ["hockey", "painting"];
const activeHobbies = ["pickling"];
activeHobbies.push(...hobbies);
const activeHobbies2 = ["pickling", ...hobbies];
const person = {
    name: "Max",
    age: 10
};
const coppiedPerson = person;
const coppiedPerson2 = Object.assign({}, person);
person.age = 50;
const activeHobbies3 = [person];
activeHobbies3.push(Object.assign({}, coppiedPerson2));
activeHobbies3.push(coppiedPerson2);
coppiedPerson2.age = 30;
const addRest = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addingnums = addRest(1, 2, 3.3, 4, 5);
const addRestTuples = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addingnum = addRestTuples(1, 2, 3.3);
console.log(adding(2, 5));
console.log(adding2(2, 5));
console.log(printOut(2));
console.log(adding3(2));
console.log(adding3(2, 3));
console.log(activeHobbies);
console.log(activeHobbies2);
console.log("person: " + person.name + " " + person.age + " copiedPerson: " + coppiedPerson.age + " " + coppiedPerson.name + " copiedPerson2: " + coppiedPerson2.age + " " + coppiedPerson2.name);
const { name: UserName, age: UserAge } = person;
console.log("person: " + UserName, UserAge);
const { name: UserName1, age: UserAge1 } = coppiedPerson;
console.log("person copied: " + UserName1, UserAge1);
const { name: UserName2, age: UserAge2 } = coppiedPerson2;
console.log("true copy person: " + UserName2, UserAge2);
console.log(activeHobbies3[1]);
console.log(activeHobbies3[2]);
console.log("sum : " + addingnums);
console.log("sum : " + addingnum);
const [h1, h2, ...remainingHobbies] = activeHobbies;
console.log("original = " + activeHobbies, " destructed: " + h1, h2, " remaining: " + remainingHobbies);
//# sourceMappingURL=app.js.map