// All the types start with 'lowercase'

let greetings: string = "Hello Hitesh";

let name: string = "Aashiq";

greetings.toLowerCase();
console.log(greetings);

// number

let userId = 334455.3;
let age = 24;
age = "24"; // even though we didnt give any type,
// TS detects its type, we are using on top of this for extra security
console.log(age);

userId.toFixed();
// userId = "hitesh"
// boolean
let isLoggedIn: boolean = false;

// any

let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();

export {};
