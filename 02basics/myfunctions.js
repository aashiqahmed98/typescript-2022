"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    //return "hello"
}
function addThree(num) {
    return num + 3;
}
var numaddedThree = addThree(4);
function getUpper(val) {
    return val.toUpperCase();
}
function getLower(val) {
    return val.toLowerCase();
}
var lowercaseValue = getLower("SOME");
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("hitesh");
signUpUser("hitesh", "hitesh@lco.dev", false);
loginUser("h", "h@h.com");
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
