// const user: (string | number)[] = [1, "hc"]

/**
 * Tuples - typed array with specific order and values of it.
 */
let tUser: [string, number, boolean];

tUser = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "example@google.com"];

newUser[1] = "hc.com";
newUser.push("something");

export {};
