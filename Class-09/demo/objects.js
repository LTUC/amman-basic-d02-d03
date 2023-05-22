'use strict';

// first object
let britshCat = {
    catName: "British Shorthair",
    favFood: "Dry food mixed with wet food",
    catImage: "https://static.onecms.io/wp-content/uploads/sites/47/2020/08/05/BRITISH.SHORTHAIR-Profile.png",
    lovePlay: true,
    catPrice: 800,

    greeting: function () {
        console.log(`welcome all to Cats World ^_^ , my name is ${this.catName} & I like ${this.favFood}`);
    }
}


console.log(britshCat);
britshCat.greeting();
console.log(britshCat.catName); // dot notation
console.log(britshCat["lovePlay"]); // bracket notation

// Second object
let americanCat = {
    catName: "American Bobtail",
    favFood: " meat and fish",
    catImage: "https://i.pinimg.com/736x/85/57/04/8557043ac4b727236f686591bf820361--american-bobtail-bobtail-cat.jpg",
    lovePlay: true,
    catPrice: 600,

    greeting: function () {
        console.log(`welcome all to Cats World ^_^ , my name is ${this.catName} & I like ${this.favFood}`);
    }
}

console.log(americanCat);
americanCat.greeting();
console.log(americanCat.catName); // dot notation
console.log(americanCat["lovePlay"]); // bracket notation

//Third object
let birmanCat = {
    catName: "Birman",
    favFood: "Blueberries, Bananas, Eggs, Salmon",
    catImage: "https://a-z-animals.com/media/2019/11/Birman-header.jpg",
    lovePlay: true,
    catPrice: 615,

    greeting: function () {
        console.log(`welcome all to Cats World ^_^ , my name is ${this.catName} & I like ${this.favFood}`);
    }
}

console.log(birmanCat);
birmanCat.greeting();
console.log(birmanCat.catName); // dot notation
console.log(birmanCat["lovePlay"]); // bracket notation


