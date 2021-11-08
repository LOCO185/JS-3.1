/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
const welcome = function() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const power = a => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
power(a);

const add = (a, b = 5) => {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}
let b = 6;
add(2,b);
var res = add(2,b);
console.log(res);

// From function expressions to function declarations
function hello(){
  let hello ="Hello!";
  return hello;
}
    

function squareRoot(a) {
    let myNum = a;
    let result = Math.sqrt(a);
    return result;
}

function randomNumbers(a, b) {
    let myNum = a;
    let math = Math.random() * (a - b) + b;
    return randomNumbers;
}


