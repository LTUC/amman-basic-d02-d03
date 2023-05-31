'use strict';

let drinksArray = [];
//Constructor
function Coffee(coffeName, ingredients, image, isHot) {
    this.coffeName = coffeName;
    this.ingredients = ingredients;
    this.image = image;
    this.isHot = isHot;
    this.price = 0;
    drinksArray.push(this);
};

//function to return random number between min and max values
function genrateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// prototype for calculate the price using the genrateRandom() function
Coffee.prototype.calculatePrice = function (min, max) {
    this.price = genrateRandom(min, max);
};

// section To add the drink cards on it
let drinks = document.getElementById('drinks');

// prototype to Render the instance created by the user as a cards. 
// Coffee.prototype.render = function () {

//     //create a div for each instance(card)
//     let drinkDiv = document.createElement("div");
//     drinkDiv.classList.add("card")
//     drinks.appendChild(drinkDiv);

//     // create image element
//     let coffeeImage = document.createElement('img');
//     coffeeImage.setAttribute('src', this.image);
//     drinkDiv.appendChild(coffeeImage);

//     //create div for the content of the instance(name,ingredients,price,Hot/Cold)
//     let contentDiv = document.createElement("div");
//     drinkDiv.appendChild(contentDiv);

//     // create  h3 element for the Drink name
//     let coffeName = document.createElement('h3');
//     coffeName.textContent = this.coffeName;
//     contentDiv.appendChild(coffeName);

//     // create  ul element for the Drink ingredients
//     let ingredients = document.createElement('ul');
//     for(let i = 0; i < this.ingredients.length; i++) {
//         let Ele = document.createElement('li');
//         ingredients.appendChild(Ele);
//         Ele.textContent = this.ingredients[i];
//     }
//     contentDiv.appendChild(ingredients);

//     // create p element for the Drink Cold/Hot and price
//     let isHot = document.createElement('p');
//     contentDiv.appendChild(isHot);
//     isHot.textContent = `${this.isHot ? 'Hot drink': 'Cold drink'} ${this.price} $`;

//     //create a line element between the cards
//     let line= document.createElement("hr")
//     drinkDiv.appendChild(line);

// }

Coffee.prototype.renderTable = function(){
    let drinksTable= document.getElementById("table");
    let drinkItem = document.createElement("tr");

    drinksTable.appendChild(drinkItem);

    let drinkName = document.createElement("td");
    let drinkPrice = document.createElement("td");

    drinkItem.appendChild(drinkName);
    drinkItem.appendChild(drinkPrice);

    drinkName.textContent = this.coffeName; 
    drinkPrice.textContent = this.price;

}
function render() {

    // clean the html elements 
    drinks.innerHTML = '';

    // For creating a Table 
    let drinksTable= document.getElementById("table");
    drinksTable.innerHTML = "";

    let tableHeader = document.createElement("tr");
    let nameHeader = document.createElement("th");
    let priceHeader = document.createElement("th");

    nameHeader.textContent = "Name";
    priceHeader.textContent = "Price"

    tableHeader.appendChild(nameHeader);
    tableHeader.appendChild(priceHeader);
    drinksTable.appendChild(tableHeader);

    // render the array with the new elment 
    for (let i = 0; i < drinksArray.length; i++) {

        /*  render the Table */ 
    
        let drinkItem = document.createElement("tr");
    
        drinksTable.appendChild(drinkItem);
    
        let drinkName = document.createElement("td");
        let drinkPrice = document.createElement("td");
    
        drinkItem.appendChild(drinkName);
        drinkItem.appendChild(drinkPrice);
    
        drinkName.textContent = drinksArray[i].coffeName; 
        drinkPrice.textContent = drinksArray[i].price;


        /*
         This render the Cards 
        */
        //create a div for each instance(card)
        let drinkDiv = document.createElement("div");
        drinkDiv.classList.add("card")
        drinks.appendChild(drinkDiv);

        // create image element
        let coffeeImage = document.createElement('img');
        coffeeImage.setAttribute('src', drinksArray[i].image);
        drinkDiv.appendChild(coffeeImage);

        //create div for the content of the instance(name,ingredients,price,Hot/Cold)
        let contentDiv = document.createElement("div");
        drinkDiv.appendChild(contentDiv);

        // create  h3 element for the Drink name
        let coffeName = document.createElement('h3');
        coffeName.textContent = drinksArray[i].coffeName;
        contentDiv.appendChild(coffeName);

        // create  ul element for the Drink ingredients
        let ingredients = document.createElement('ul');
        for (let j = 0; j < drinksArray[i].ingredients.length; j++) {
            let Ele = document.createElement('li');
            ingredients.appendChild(Ele);
            Ele.textContent = drinksArray[i].ingredients[j];
        }
        contentDiv.appendChild(ingredients);

        // create p element for the Drink Cold/Hot and price
        let isHot = document.createElement('p');
        contentDiv.appendChild(isHot);
        isHot.textContent = `${drinksArray[i].isHot ? 'Hot drink' : 'Cold drink'} ${drinksArray[i].price} $`;

        //create a line element between the cards
        let line = document.createElement("hr")
        drinkDiv.appendChild(line);
    }
}
// Get the Form element
let saveValues = document.getElementById('drinkForm');
// Add a listener for the Form 
saveValues.addEventListener('submit', handler)

// Handler to collect the data from the user. 
function handler(e) {
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
    //drink.render();

    storeIntoLocalStorage();

    render();

 
    


};

function storeIntoLocalStorage() {
    console.log("The Array drinsk added by user JS format => ", drinksArray);
    // convert JS to JSON 
    let jsonObjArray = JSON.stringify(drinksArray);
    window.localStorage.setItem("drinks", jsonObjArray);
}



function readFromLocalStorage() {
    // read the json Array From LS 
    let jsonArray = window.localStorage.getItem("drinks");
    // convert the JSON to JS 
    let objArray = JSON.parse(jsonArray);
    console.log("Array after read From LS before the re-intantiation => ", objArray);

    if (objArray == null) {
        console.log("The LS is Empty");
    } else {
        // drinksArray = objArray;
        // console.log("Global Drinks Array => ", drinksArray);

        // Re-instantiation >> to get back the methods and prototype  

        for(let i = 0 ; i< objArray.length; i++){
            let drink = new Coffee(objArray[i].coffeName , objArray[i].ingredients , objArray[i].image , objArray[i].isHot);
            drink.price = objArray[i].price ; 
        }
        console.log("Global Drinks Array After the re-instantiation => ", drinksArray);

    }


}

readFromLocalStorage();


render();

