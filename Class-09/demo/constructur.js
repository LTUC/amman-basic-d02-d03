'use strict';

// Our blueprint "Constructor"
function Cat(name ,food,image,play,price) {
    
    this.catName = name;
    this.favFood = food;
    this.catImage = image;
    this.lovePlay = play;
    this.catPrice = price;
    
}

// Create a greeting as prototype function 

Cat.prototype.greeting = function () {
    console.log(`welcome all to Cats World ^_^ , my name is ${this.catName} & I like ${this.favFood}`);
}

// function greeting() {
//     console.log(`welcome all to Cats World ^_^ , my name is ${this.catName} & I like ${this.favFood}`);
// }

// Create a new objects from constructor

let britshCat = new Cat("British Shorthair", "Dry food mixed with wet food", "https://static.onecms.io/wp-content/uploads/sites/47/2020/08/05/BRITISH.SHORTHAIR-Profile.png", true, 800);
let americanCat = new Cat("American Bobtail", "meat and fish", "https://i.pinimg.com/736x/85/57/04/8557043ac4b727236f686591bf820361--american-bobtail-bobtail-cat.jpg", true, 600);




console.log(britshCat);
britshCat.greeting();
console.log(americanCat);
// americanCat.greeting();

