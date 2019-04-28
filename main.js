/**Used in browserify */
var whatever = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('answer:', whatever.without(array, 1, 2, 3));
console.log("Trying gitHub here e");

var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#body");

function setGradient() {
    body.style.background = "linear-gradient(to right, " +
        color1.value + "," +
        color2.value + ")";

    css.innerHTML = "background: linear-gradient(to right, " +
        color1.value + ", " + color2.value + ");";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);