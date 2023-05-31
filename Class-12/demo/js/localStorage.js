'use strict';

window.localStorage.setItem("gender","female");

window.localStorage.setItem("name","Ala Alwazani")

let gender = window.localStorage.getItem("gender");

console.log("the Gender => ", gender);

window.localStorage.setItem("gender","male");

//window.localStorage.removeItem("gender");

let key = window.localStorage.key(0);
console.log("key index 0 => ",key)

window.localStorage.clear();
window.localStorage.setItem("gender","female");

window.localStorage.setItem("name","Ala Alwazani")