// problem domain: ASAC coffee house is a new cafe so they are updating their menu 
// There are alot of drinks that they can add to the menu and  it's too time-consuming to hand-code them each time  
// so They need a better and faster way.

// Each drink should has:
// - name
// - ingredients
// - an image
// - cold
// - hot 
// - price 

// TODO: dynamically generate drink objects using form data

'use strict';
// Third Step : Create an array to store all objects inside it 
const allDrinks = [];
// First Step: Create a Constructor
function Drink(name, ingredients,image,cold,hot,price) {
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.isCold = cold;
    this.isHot = hot;
    this.price = price;
    allDrinks.push(this);
}

//Fourth Step: Create a renderDrinks prototype function

Drink.prototype.renderDrinks = function () {
    // latte obj
    // console.log(this.name);
    // document.write(this.name)
    document.write(`<h1> The Drink is : ${this.name} </h1>`);
    document.write(`<p> The Ingredients are : ${this.ingredients}</p>`)
}

// Second Step: Create a new objects 
let americano = new Drink("americano", ["hot water", "espresson"], "./assets/americano.png", false, true, 1);
let latte = new Drink("latte", ["water", "espresson", "milk", "sugar"], "./assets/latte.png", true, true, 2);
let turkish = new Drink("turkish", ["coffe", "water"], "./assets/mocha.png", false, true, 1)


// console.log(americano);
// console.log(latte);

// Static way to push the objects to the array
// allDrinks.push(americano, latte);

console.log(allDrinks);

// For loop to iterate through the objects and call the renderDrinks method for each
//             [0          ,1      ,2      ]
// allDrinks = [americano , latte , turkish]
for (let i = 0; i < allDrinks.length; i++){
    allDrinks[i].renderDrinks();
}

// latte.renderDrinks();