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

"use strict";
// Third Step : Create an array to store all objects inside it
const allDrinks = [];
// First Step: Create a Constructor
function Drink(name, ingredients, image, cold, hot, price) {
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

  // From class-09 "Constructor"

    // document.write(`<h1> The Drink is : ${this.name} </h1>`);
    // document.write(`<p> The Ingredients are : ${this.ingredients}</p>`)

  /* ********************************************************************* */
  // From class-10 "DOM manipulation"

  // create the container element
    let divE=document.createElement("div");
    let body=document.getElementsByTagName("body")[0];
    body.appendChild(divE);

  // add drink name
    let drinkName=document.createElement("h1");
    drinkName.textContent=` Drink: ${this.name}`;
    divE.appendChild(drinkName);


  // add drink price
  let drinkPrice=document.createElement("h3");
  drinkPrice.textContent=`Price: ${this.price}`;
  divE.appendChild(drinkPrice);


  // add drink image
  let drinkImage=document.createElement("img");
  drinkImage.src=this.image;
  drinkImage.alt=this.name;
  divE.appendChild(drinkImage);


  // add drink Ingredients
  let drinkIngredients=document.createElement("h4");
  drinkIngredients.textContent="Ingredients:";
  divE.appendChild(drinkIngredients);

  for(let i=0;i<this.ingredients.length;i++){
    let li=document.createElement("li");
    li.textContent=this.ingredients[i];
    divE.appendChild(li);
  }

  // add border for container
  divE.style.border="2px solid brown";

};

// Second Step: Create a new objects
let americano = new Drink(
  "americano",
  ["hot water", "espresso"],
  "./assets/americano.png",
  false,
  true,
  1
);
let latte = new Drink(
  "latte",
  ["water", "espresso", "milk", "sugar"],
  "./assets/latte.png",
  true,
  true,
  2
);
let turkish = new Drink(
  "turkish",
  ["coffee", "water"],
  "./assets/mocha.png",
  false,
  true,
  1
);


for (let i = 0; i < allDrinks.length; i++) {
  allDrinks[i].renderDrinks();
}
