function add(n1:number, n2:number, pR: boolean, phrase:string) {
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        pR = false;
        console.log(phrase + pR);
    }
    else{
        pR = true;
        console.log(phrase + (n1 + n2) + ' ' + pR);
    }
}
let num1:number;
num1 = 5;
const number1 = 5;
const number2 = 2.8;
let printResult = true;
const resultPhase='Result is: ';
add(number1, number2, printResult, resultPhase);
add(1, 2, printResult, resultPhase);
add(num1, number1, printResult, resultPhase);
add(1, 2, printResult, resultPhase);