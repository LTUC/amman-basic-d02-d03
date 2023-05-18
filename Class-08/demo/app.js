"use strict ";


let arr = ['ahmad', 'anas','leen']

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    
}


// while (condition) {
//     // code block to be executed
// }

// I want to put 5 layer of creme on the top of cup cake  🍰
let targetNumber = 5
let layer = 0

while(layer<targetNumber){
layer= layer+1;
console.log(layer);
}

// use while loop to validate user's input that enter right password or not
let password = "123"

let userInput = prompt('please enter a right password');

while (userInput !== password) {
    console.log('hi')
    userInput = prompt('please enter a right password');
}

alert('right password')



// explain Function declaration 

//  var materials = ['wood','screws','Glue','fabric']

// function chairFactory(materials){
//     // process
//     let output = "chairs";

//  return output
// };

// chairFactory(materials);
// console.log(chairFactory(materials));



// generate a random Number
function getRandomInt(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt(5, 10));


// function expression 

var functionVar = function(){
  console.log('I did it!');
}
functionVar();

// Hoisting

console.log(notDeclared); // Uncaught ReferenceError: notDeclared is not defined

var definedLater;
console.log(definedLater);
definedLater = 'I am defined!'
console.log(definedLater)

function doSomethingElse(){
  console.log('I did it!');
 }
doSomethingElse();

var functionVar; 
functionVar(); // Uncaught TypeError: functionVar is not a function
var functionVar = function(){
console.log('I did it!');
}

let ahmad = {
    firstName : 'Ahmad',
    lastName : 'alsoub',
    height : 169,
    average : 60,
    likeProgramming : true,
    intro : function(){
    return `my name is ${this.firstName} ${this.lastName}`
    },
    myLuckyNumber : function(){
            return getRandomInt(1, 1000)
  }
} 
// dot notation 
console.log(ahmad.intro())

console.log(ahmad.firstName)

console.table(ahmad)

// bracket notation 
console.log('bracket notation ', ahmad['firstName']);

// add a new property to object
ahmad.major =' QA' ; 
ahmad['major'] = 'QA'
console.log(ahmad.major)

ahmad.defineLevel = function(){

if (ahmad.average > 90){
    return 'excellent'
}
else{
    return 'good'
}

}
console.log(ahmad.defineLevel())
console.log(ahmad.myLuckyNumber())


let mohammad = {
    firstName : 'mohammad',
    lastName : 'abutaimeh',
    height : 169,
    average : 100,
    likeProgramming : false,
    intro : function(){

        // interpolation expression
  
    return `my name is ${this.firstName} ${this.lastName}`

    },
    myLuckyNumber : function(){
            return getRandomInt(1, 1000)
  }
} 
console.log(mohammad)
console.log(mohammad.myLuckyNumber())

document.getElementById("demo").innerHTML = `my name is ${mohammad.firstName} ${mohammad.lastName}`;
document.getElementById("demo2").innerHTML = `my name is ${ahmad.firstName} ${ahmad.lastName}`;





