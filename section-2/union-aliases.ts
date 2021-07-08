type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
function add(
    input1:Combinable, 
    input2:Combinable, 
    resultConv: ConversionDescriptor, //only able to be as-number or as-text
) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConv === 'as-number')
    {
        result = +input1 + +input2;
    }
    else
    {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConv === 'as-number')
    // {
    //     return +result;
    // } 
    // else 
    // {
    //     return result.toString();
    // }
    
}
const combined = add(30,60, 'as-number');
console.log(combined);
const combinedNums = add('30','60', 'as-number');
console.log(combinedNums);
const combinedName = add('max', 'annie', 'as-text');
console.log(combinedName);