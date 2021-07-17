"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add);
console.log(add(5, 3));
class Person {
    constructor(name, age = 30, output) {
        this.name = name;
        this.age = age;
        this.output = output;
    }
    greet(phrase) {
        (this.output) ? console.log(this.output) : console.log(phrase + ' ' + this.name + ' my age is ' + this.age);
    }
}
let user1;
user1 = {
    name: 'Anneka',
    age: 34,
    greet(phrase) {
        console.log(phrase + ' ' + this.name + ' my age is ' + this.age);
    }
};
let user2 = new Person('not Anneka');
let user3 = new Person('Batman', 1000, "I'm Batman");
user1.greet('Hi I am');
user2.greet('Hi I am');
user3.greet('');
//# sourceMappingURL=app.js.map