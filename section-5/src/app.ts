//type AddFn = (a:number, b:number) => number;
interface AddFn {
    (a:number, b:number): number;
}
let add: AddFn;
add = (n1:number, n2:number) => {
    return n1+n2;
 };
 console.log(add);// interesting this shows the entire function of add.
 console.log(add(5,3));

interface Named {
    readonly name: string;
}
interface AnotherInterface {
    readonly age: number;
}
//interfaces are purely for typescript all traces of the interface are removed in the js file.
//Interfaces can't be instantiated and are not compiled, classes can be instantiated and are compiled.
//interfaces can inherit another interface
interface Greetable extends Named, AnotherInterface{
    readonly name: string;
    output?:string; // ? makes this optional
    readonly age: number;
    //age: number;
    //parameters above. method's below.
    greet(phrase: string): void;
// difference between using interfaces and types is that interfaces are clearer. 

// A class can implement an interface or type alias, both in the same exact way. Note however that a class and 
// interface are considered static blueprints. Therefore, they can not implement / extend a type alias that 
// types can use primitives, unions, and tuples. 
// https://i.stack.imgur.com/6Tjyp.png
// names a union type.

//ex:
// primitive
// type Name = string;

// // object
// type PartialPointX = { x: number; };
// type PartialPointY = { y: number; };

// // union
// type PartialPoint = PartialPointX | PartialPointY;

// // tuple
// type Data = [number, string];

}
class Person implements Greetable{
    constructor(public readonly name:string, public readonly age= 30, public output?:string){}
    greet (phrase: string) {
        (this.output)? console.log(this.output):console.log(phrase + ' ' + this.name + ' my age is '+ this.age);
    }
}
let user1: Person;
user1 = {
    name: 'Anneka',
    age: 34,
    greet(phrase:string){
        console.log(phrase + ' ' + this.name + ' my age is ' + this.age);
    }
};
let user2 = new Person('not Anneka');
let user3 = new Person('Batman', 1000, "I'm Batman");
user1.greet('Hi I am');
user2.greet('Hi I am');
user3.greet('');
// {} in typescript describe objects. 