// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }
function Logger(logString: string) {
    console.log('Logger Factory');
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    };
}
// function withTemplate(template: string, hookId: string) {
//     //return function(_: Function){ //this a legal way to instantiate a constructor that doesn't exist
//     return function(constructor: any){ //any used to allow constructor 
//         console.log('Rendering template');
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor();
//         if (hookEl){
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = p.name;// this will get the name of the constructed person.
//         }
        
//     }
// }
//@Logger
//@Logger('Logging - Person')
function withTemplate(template: string, hookId: string) {
    return function<T extends {new(...args: any[]): {name: string}}> (ogConstructor: T){ //creates an object that instantiates person with name of type string; 
        return class extends ogConstructor {
            constructor(..._: any) { // "_" tells typescript that we want to ignore this
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl){
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    };
}

@Logger('Logging')
@withTemplate('<h1> My Little Person </h1>', 'app') //My Person appears in page

class Person {
    name= "Anneka";
    constructor() {
        console.log("Creating person named " + this.name + ".");
    }
} 
const pers = new Person();
console.log(pers);
//const prod = new Product(9.00);
//console.Log(prod);
function Log1(target: any, propName: string){
    console.log('Property Decorator!');
    console.log(target, propName);
}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    //return {en};
}
function Log3(target: any, name:string | Symbol, descriptor:PropertyDescriptor){
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target: any, name:string | Symbol, position: number){
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log1
    title: string;
    private _price: number;
    @Log2
    set price(val:number) {
        if(val > 0){
            this._price = val;
        }
        else{
            throw new Error('Invalid price - should be positive value');
        }
    }
    constructor(t: string, p: number){
        this.title= t;
        this._price= p;
    }
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price +(1 + tax);
    }
}
function Autobind(_target:any, _methodName: string, descriptor: PropertyDescriptor) { //automatically bind funtion. '_'added to target and methodName so that they can be ignored. 
    const orginalMethod = descriptor.value;
    const adjDiscriptor: PropertyDescriptor ={
        configurable:true,
        enumerable:false,
        get(){
            const boundFn = orginalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDiscriptor;
}
class Printer {
    message = 'this works!';
    @Autobind
    showMessage(){
        console.log(this.message);
    }
}
const p = new Printer();
const button = document.querySelector('button')!;
//button?.addEventListener('click', p.showMessage.bind(p));//this shows undefined because it shows the pointer to showMessage. bind() will allow this to reference the object.   
button?.addEventListener('click', p.showMessage);


interface ValidatorConfig {
    [property: string]:{
        [validatableProp: string]: string[];// ['required', 'positive']
    }
}
const registeredValidators: ValidatorConfig = {};
function Required(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    };
}
function PositiveNum(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig){
        return true;
    }
    let isValid = true; 
    //isValid is added to make it so that the first case that returns true 
    //doesn't cause the rest of the cases to pass even though they are invalid. 
    //Without this if the price is valid but the course title isn't  this will still save.

    for (const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]){
            switch (validator) {
                case 'required':
                    //return !!obj[prop]; //!! is called the double bang and this is a typecast for boolean
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    //return obj[prop] > 0;
                    isValid = isValid && (obj[prop] > 0);
                    break;
            }
        }
    }
    return isValid;
}

class Course{
    @Required
    title: string;
    @PositiveNum
    price: number;
    constructor(t: string, p: number){
        this.title = t;
        this.price= p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event =>{
    event.preventDefault();
    const titleElm = document.getElementById('title') as HTMLInputElement;
    const priceElm = document.getElementById('price') as HTMLInputElement;
    const title = titleElm.value;
    const price = +priceElm.value;//+ added to type cast numbers

    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)){
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
})
