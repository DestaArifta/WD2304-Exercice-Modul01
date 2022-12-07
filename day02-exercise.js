// Convert celcius to fahrenheit
let c = 64;
const f = (c * 9/5) + 32;
console.log(`${c} derajat celcius = ${f} derajat fahrenheit`);


// check number is odd or even
let num = 3;
if (num % 2) {
    console.log(`${num} is odd`)
} else {
    console.log(`${num} is even`)
}

// check number is prime or not
let num2 = 4;
let bool = true;
for (let i = 2; i < num2; i++) {
    if (num2 % i == 0) {
        bool = false;
        break;
    }
}
console.log(bool ? `${num2} is prime number` : `${num2} is not a prime number`)

// find sum of the number 1 to n
let num3 = 10;
let sum = 0;
let message = "";
let i = 0;
for (i = 1; i <= num3; i++) {
    sum += i;
    if (i != 1) {   
        message += ' -> '
    }
    message += `${i}`;
    console.log(i)
}
console.log(` sum of the numbers ${message} = ${sum}`)

// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

// print the first N fibonacci numbers

let N = 8;

let a = 0;
let b = 1;
let str = "";

for (let i = 0; i < N; i++) {
    temp = a + b;

    if (i != N){
        str += ", "
    }
    console.log (`8 = ${a}`);
    
    str += a.toString()
    a=b;
    b=temp;
}
console.log(`${N} = ${str}`)