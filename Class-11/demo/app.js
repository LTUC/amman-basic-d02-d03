'use strict';

//Constructor
function Coffee(coffeName, ingredients, image, isHot){
    this.coffeName = coffeName;
    this.ingredients = ingredients;
    this.image = image;
    this.isHot = isHot;
    this.price = 0;
};
//calculate Price
function genrateRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
};
Coffee.prototype.calculatePrice = function(min, max){
this.price = genrateRandom(min, max);
console.log(this.price);
};
//Render
Coffee.prototype.render = function () {
    let drink = document.getElementById('drink');

    let coffeName = document.createElement('h3');
    coffeName.textContent = this.coffeName;
    drink.appendChild(coffeName);

    let ingredients = document.createElement('ul');
    for(let i = 0; i < this.ingredients.length; i++) {
        let Ele = document.createElement('li');
        ingredients.appendChild(Ele);
        Ele.textContent = this.ingredients[i];
    }
    drink.appendChild(ingredients);

    let coffeeImage = document.createElement('img');
    coffeeImage.setAttribute('src', this.image);
    drink.appendChild(coffeeImage);

    let isHot = document.createElement('p');
    drink.appendChild(isHot);
    isHot.textContent = `${this.isHot ? 'Hot drink': 'Cold drink'} ${this.price} $`;

}


// let mocha = new Coffee('moch', ['sugar', 'milk'], './assets/mocha.png', false);
// let espresso = new Coffee('espresso', ['sugar', 'milk'], './assets/espresso.png', true);
// mocha.calculatePrice(2, 10);
// mocha.render();
// espresso.calculatePrice(2, 10)
// espresso.render();

function handler(e){
    e.preventDefault();
    let coffeeName = e.target.coffee.value;
    let ingredients = e.target.ingredients.value.split(',');//['sugar', 'milk']
    let coffeeImage = e.target.image.value;
    let isHot = e.target.hot.checked;

    let drink = new Coffee(coffeeName, ingredients, coffeeImage, isHot);
    
    drink.calculatePrice(2, 10);
    drink.render();

    // console.log(e);
    console.log(coffeeName, ingredients, coffeeImage, isHot);
};

let saveValues = document.getElementById('drinkForm');
saveValues.addEventListener('submit', handler)