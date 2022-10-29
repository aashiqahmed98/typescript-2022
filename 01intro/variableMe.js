"use strict";
// All the types start with 'lowercase'
exports.__esModule = true;
var greetings = "Hello Hitesh";
var name = "Aashiq";
greetings.toLowerCase();
console.log(greetings);
// number
var userId = 334455.3;
var age = 24;
age = "24"; // even though we didnt give any type,
// TS detects its type, we are using on top of this for extra security
console.log(age);
userId.toFixed();
// userId = "hitesh"
// boolean
var isLoggedIn = false;
// any
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
