"use strict";

let buttonOne = document.getElementById("newButton");
buttonOne.addEventListener("click", function (e) {
  console.log(e.target.id);
});

let inputField = document.getElementById("username");

buttonOne.onclick = function (e) {
  console.log(e);
};

let user = document.getElementById("user");
let newDiv;
function createEle() {
  newDiv = document.createElement("div");
  newDiv.textContent = "Hello";
  user.appendChild(newDiv);
  newDiv.addEventListener("click", function (e) {
    console.log(e);
  });
}
createEle();

// newDiv.onclick = function (e) {
//     console.log(e);
// };
// createEle();
// function handler(e){
//     console.log(e.target.value)
// }

// inputField.addEventListener('change', handler);
