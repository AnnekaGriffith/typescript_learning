function added(n1: number, n2: number) {
    return n1 + n2;
}
function printResult(num: number): void {
    console.log('Result: ' + num);
}
function addAndHandle(n1: number, n2: number, cb:(num: number)=> void)
{
    const result = n1 + n2;
    cb(result);
}
printResult(added(5,2));
let combineVar: (a: number, b: number) => number; // this says it accepts a function that takes 2 numbers and returns a number 

combineVar = added;
//combineVar = printResult; (console produces undefined)
//combineVar = 5;
console.log(combineVar(8,9));
//let someValue: undefined;
addAndHandle(10,20, (result)=>{
    console.log(result);
    return true;
});