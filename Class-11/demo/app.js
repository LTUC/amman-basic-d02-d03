'use strict';

//Constructor
function Coffee(coffeName, ingredients, image, isHot){
    this.coffeName = coffeName;
    this.ingredients = ingredients;
    this.image = image;
    this.isHot = isHot;
    this.price = 0;
};

//function to return random number between min and max values
function genrateRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
};

// prototype for calculate the price using the genrateRandom() function
Coffee.prototype.calculatePrice = function(min, max){
this.price = genrateRandom(min, max);
console.log(this.price);
};

// section To add the cards on it
let drinks = document.getElementById('drinks');

// prototype to Render the instance created by the user as a cards. 
Coffee.prototype.render = function () {
   
    //create a div for each instance(card)
    let drinkDiv = document.createElement("div");
    drinkDiv.classList.add("card")
    drinks.appendChild(drinkDiv);

    // create image element
    let coffeeImage = document.createElement('img');
    coffeeImage.setAttribute('src', this.image);
    drinkDiv.appendChild(coffeeImage);

    //create div for the content of the instance(name,ingredients,price,Hot/Cold)
    let contentDiv = document.createElement("div");
    contentDiv.classList.add("container");
    drinkDiv.appendChild(contentDiv);

    // create  h3 element for the Drink name
    let coffeName = document.createElement('h3');
    coffeName.textContent = this.coffeName;
    contentDiv.appendChild(coffeName);

    // create  ul element for the Drink ingredients
    let ingredients = document.createElement('ul');
    for(let i = 0; i < this.ingredients.length; i++) {
        let Ele = document.createElement('li');
        ingredients.appendChild(Ele);
        Ele.textContent = this.ingredients[i];
    }
    contentDiv.appendChild(ingredients);

    // create p element for the Drink Cold/Hot and price
    let isHot = document.createElement('p');
    contentDiv.appendChild(isHot);
    isHot.textContent = `${this.isHot ? 'Hot drink': 'Cold drink'} ${this.price} $`;

    //create a line element between the cards
    let line= document.createElement("hr")
    drinkDiv.appendChild(line);

}

// Get the Form element
let saveValues = document.getElementById('drinkForm');
// Add a listener for the Form 
saveValues.addEventListener('submit', handler)

// Handler to collect the data from the user. 
function handler(e){
    e.preventDefault();
    let coffeeName = e.target.coffee.value;
    let ingredients = e.target.ingredients.value.split(',');//split: to convert the string to the array. 
    let coffeeImage = e.target.image.value;
    let isHot = e.target.hot.checked;

    //create a coffee instance
    let drink = new Coffee(coffeeName, ingredients, coffeeImage, isHot);
    // calculate the price for the coffee
    drink.calculatePrice(2, 10);
    //render the coffee instance as a card
    drink.render();

};

