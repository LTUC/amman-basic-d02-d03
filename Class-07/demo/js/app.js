'use strict';


// number
// let numOne = 1;

// string
// let userName = "Buthainah";

//Boolean
// let flag = false;

//Array
// let arr = ["Hello", "Rule"];

//Objects
// let obj = {userName: "Rahaf", password: "123"};

//NUll
// let obj2 = null;

// var x = 1;
// x = 2;
// console.log(typeof(1));//

// Dynamic Language 

// var y = 1;//number
// y = "hello";//string
// console.log(y);

// var $ = 1;
// console.log($);//5hello
// var $num = 2;
// console.log($num);
//Rules for Naming Variables in JavaScript
/**
 * 1- can contain letters, digits underscors and dollar sign
 * 2- avoid declare a variable using reserved keyword
 * 3- variables names are case sensitive
 * 4- without spaces
 * 5- make the variable name meaningful name
 * 6- user underscore instead of dash.
 * 7- use camelCase.
 * 8- I can start with $ and _
 */

// Var - Const  - Let
// var x = 0;//I can change it
// x = 1;


let x=0;
console.log(x);

let y = '123' + 5;//I can change it

console.log(y);

const z = 9;// I can't change the value
console.log(z);

//Primitive VS non Primitive(by referance)
/**
 * primitave => string , number, boolean 
 * 
 */
const stringOne = "javascript";
const stringTwo = "javascript";

console.log(stringOne == stringTwo)

const arrOne = ['hello', 'js'];
const arrTwo = ['hello', 'js'];
console.log(arrOne == arrTwo)


let stringTest = 'hi';
console.log(stringTest);
stringTest = 'hello';
console.log(stringTest);
//0 1 2
let arr3 = [1, 2, 3];
console.log(arr3);
arr3[1] = 5;
console.log(arr3);

/**
 * operators: 
 * 1- logical operator
 * && || !
 * 2- comparision operator
 * < , <=
 * > , >=
 * ==, check for value
 *  
 * ===, => check for value and datatype
 * 
 */
let num = 45;
let num2 = 45;
//true && true => true
//true && false => false
//false && true => false
//false && false => false

//true || true => true
//true || false => ture
//false || true => true
//false || false => false


let numFour = undefined;//falsy value
let arrOne1 = null;

if(!arrOne1) {//false
    console.log('true');
} else {
    console.log('false');
}
//Pop up boxes
/*alert => print a message to the user
prompt => ask the user to enter something
confirm => ask the user to enter yes no to aswer specific question
*/
alert('Welcome to Our course');
let userName = prompt('please enter your name');
if(userName){
    // alert(`Hello ${userName}`)// string interpolation
    //OR
    alert('Hello '+ userName)
}
// let answer = confirm("do you like Javascript");//true, flase
// console.log(answer);

const operater = prompt('please enter + -');
const numOne = parseInt(prompt('please enter number one'))
const numTwo = parseInt(prompt('please enter number two'))
let result = 4; // initail value
switch(operater){
    case '+':
        // result = num1 + num2;
        result += numOne + numTwo;
        console.log("+");
        break;
    case '-':
        result = numOne - numTwo;
        console.log("-");
        break;
    default:
        console.log('invalid');
}
console.log(result);

let arr = ["hello", "hi", "welcome"];
console.log(arr);
//length 3
for(let i=0; i< arr.length; i++){
    console.log(arr[i])
}


/** 
 * for(initialization; condition; step){
 * 
 * }
 * 
*/
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// let result = 0;
function welcomeMessage(num) {
   return num * num //25
}

//invoke the function

console.log(welcomeMessage(5));
