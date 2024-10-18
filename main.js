//Task1
let undefinedCheck;
let nullCheck = null;
let booleanCheck = true;
let numberCheck = 1;
let stringCheck = "Hello world";
let objectCheck = {};
let symbolCheck = Symbol('symbolCheck')
let bigIntCheck = BigInt(5)
console.log(typeof(undefinedCheck))
console.log(typeof(nullCheck) + " " + typeof(null))
console.log(typeof(booleanCheck))
console.log(typeof(numberCheck))
console.log(typeof(stringCheck))
console.log(typeof(objectCheck))
console.log(typeof(symbolCheck))
console.log(typeof(bigIntCheck))

//Task2
const message1 = prompt("Write your message");
const message2 = prompt("Write your message");
const message3 = prompt("Write your message");
console.log(`${message1}
    ${message2}
    ${message3}`)

//Task3
const number = prompt("Enter the number which consist 5 figures")
let changedNumber = number.toString().split('').join(' ');
console.log(changedNumber)