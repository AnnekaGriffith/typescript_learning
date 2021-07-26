// const names: Array<string> = [];// arrays are generic Array <T>
// //names[0].split(' ');
// //Arrays knows what type it is
// const promise: Promise<string> = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve('This is done!');
//     }, 2000);
// });//promise type we get better type safety with generic types
// //a promise knows what data it returns

// promise.then(data=>{
//     data.split(' ');
// })

function merges<T extends object, U extends object>(objA: T, objB: U) {//the extends makes sure we can only assign objects
    return Object.assign(objA,objB);
} 
//const mergedObj = merges<{name: string, due: Date}, {type: string}>({name: 'Tax', due: new Date}, {type:'Federal'});
//type casting isn't necessary because it is inferred
const mergedObj = merges({name: 'Tax', due: new Date}, {type:'Federal'});
console.log(mergedObj);
console.log(mergedObj.type);
console.log(mergedObj.due);

//we use generics here because object is an unspecific type.

const mergeO = merges({name: 'Tax', due: new Date}, {owe: 75, currency: 'usd'});
console.log(mergeO);
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element:T){
    let descriptionText = 'Got no value.';
    if (element.length === 1){
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1){
        descriptionText = 'Got ' + element.length + ' element.';
    }
    return [element,descriptionText]
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([10, 78, 90]));
console.log(countAndDescribe([]));
//console.log(countAndDescribe(10)); can't use a number because 10 doesn't have a length property

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({name: 'Chicken'}, 'name'));
//inplements key

class DataStorage<T>{
//solution here is to only work with primative types eg:
//class DataStorage<T extends number | string | boolean>{
    private data: T[] = [];
    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item: T){
        if (this.data.indexOf(item) === -1)
            return;    
        this.data.splice(this.data.indexOf(item),1);//splice done by index and number of 
    }
    getItems(){
        return[...this.data];//return a copy of this data
    }
}
const textStorage = new DataStorage<string>();
textStorage.addItem('Hog');
textStorage.addItem('Hog');
textStorage.addItem('Hog');
textStorage.addItem('kitten');
console.log(textStorage.getItems());
textStorage.removeItem('Hog');

console.log(textStorage.getItems());

const NumTextDate = new DataStorage<string|number>();

const objStorage = new DataStorage<object>();
objStorage.addItem({name: 'Constable'});
objStorage.addItem({name: 21});
objStorage.removeItem({name: 'Constable'});
//doesn't work because it is an object and has a different address from the array it is being spliced from.
//instead it removes the last item in the array, because it can not be identified
//bellow is the only way to make this function work.
console.log(objStorage.getItems());
const hench_24 = {name: 24};
objStorage.addItem(hench_24);
console.log(objStorage.getItems());
objStorage.removeItem(hench_24);
console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string[];
    completeUntil: Date;
}

function CreateCourseGoal(
    title: string,
    description: string[],
    date: Date
): CourseGoal{
    let courseGoal: Partial <CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date; 
    return courseGoal as CourseGoal;
}

const StoryBookNames: Readonly<String[]> = ['Mr.Toad', 'Mr. Frog'];
//StoryBookNames.push('miss Muppet'); illegal operation on readonly
//StoryBookNames.pop(); illegal operation on readonly


class DataStorage2{
    //solution here is to only work with primative types eg:
    //class DataStorage<T extends number | string | boolean>{
        private data: number [] | string []| boolean [] = [];
        // addItem(item: number | string | boolean){
        //     this.data.push(item);
        // }
        // removeItem(item: number | string | boolean){
        //     if (this.data.indexOf(item) === -1)
        //         return;    
        //     this.data.splice(this.data.indexOf(item),1);//splice done by index and number of 
        // }
        // union type here doesn't work because we have looked in a type in the private data, but 
        // in the two functions we are saying these types can be any of the types.
        getItems(){
            return[...this.data];//return a copy of this data
        }
    }
    const textStorage2 = new DataStorage<string>();
    textStorage2.addItem('Hog');
    textStorage2.addItem('Hog');
    textStorage2.addItem('Hog');
    textStorage2.addItem('kitten');
    console.log(textStorage2.getItems());
    textStorage2.removeItem('Hog');
    
    console.log(textStorage2.getItems());
