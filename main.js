let output = document.querySelector("#output");

let li1 = document.createElement("p");
li1.textContent = "Hello1";
li1.style.color = "red";
let li2 = document.createElement("p");
li2.textContent = "Hello2";
li2.style.color = "orange";
let li3 = document.createElement("p");
li3.textContent = "Hello3";
li3.style.color = "orange";
let li4 = document.createElement("p");
li4.textContent = "Hello4";
li4.style.color = "green";
let li5 = document.createElement("p");
li5.textContent = "Hello5";
li5.style.color = "green";
let li6 = document.createElement("p");
li6.textContent = "Hello6";
li6.style.color = "red";

output.appendChild(li1);
output.appendChild(li2);
output.appendChild(li3);
output.appendChild(li4);
output.appendChild(li5);
output.appendChild(li6);

// let listitems = document.getElementById("output").childNodes;

// let array = [];

// console.log(listitems[1].style.cssText[7]);

// listitems.forEach((item) => {
//   array.push(item);
// });
// console.log(array);

// array.sort(function (a, b) {
//   var colorA = a.style.cssText[7];
//   var colorB = b.style.cssText[7];
//   if (colorA < colorB) {
//     return -1;
//   }
//   if (colorA > colorB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });
// array.forEach((hello) => {
//   output.appendChild(hello);
// });
