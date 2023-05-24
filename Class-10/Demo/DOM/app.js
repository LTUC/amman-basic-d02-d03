"use strict";

/* ********************************************************************** */
// ************ Adding elements by using document.write  ***************
/* *********************************************************** ************/
// document.write("<h1>Hello from document.write!</h1>");

/* *********************************************************** ************/

/// DOM Manipulation


// console.log(document);

/* ********************************************************************** */
// ******************  access/select exist elements  ************************
/* *********************************************************** ************/

//1. by using tag name

// access element & it's attribute.
let h1E=document.getElementsByTagName("h1")[0];
// console.log(h1E.textContent);
// update text content
h1E.textContent="Hello everyone!";
// console.log(h1E.textContent);

//2. by using id
let pE=document.getElementById("par");
// console.log(pE.textContent);

let pE2=document.getElementsByTagName("p")[1];
// pE2.id="par2";
// pE2.setAttribute("id", "par2");

pE2.textContent="This Paragraph'content is added from JS file";
// console.log(pE2);

// 3. by using class name

let divE=document.getElementsByClassName("containerOne");
// console.log(divE[0]);
divE[0].style.color="blue";

// divE[1].setAttribute("class", "containerTwo");
let divE2=document.getElementsByTagName("div")[1];
divE2.setAttribute("class", "containerTwo");

let body=document.getElementsByTagName("body");
// console.log(body);
// body[0].setAttribute("class", "containerTwo");


/* ********************************************************************** */
// ************************ creating elements  ****************************
/* *********************************************************** ************/

// 1. create element
let pE3=document.createElement("p");
console.log(pE3);

//2. add text content or attribute
pE3.textContent="this paragraph is added from JS file";
console.log(pE3.textContent);

// // 3. append it
divE2.appendChild(pE3);

// h1E.insertAdjacentHTML("beforeend",`<p>second par</p>`)

let imgE=document.createElement("img");
imgE.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGwJBOjNkwjJP6bgohSUw7HOSctjF8y3g0w&usqp=CAU");

body[0].appendChild(imgE);





