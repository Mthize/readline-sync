const input = require("readline-sync");

const userName = input.question("What is your name? ");
console.log(
  "Hello, " +
    userName +
    "! Welcome to the Values, Data Types, and Operations quiz.",
);

const answer1 = input.question("1. What data type is the value true? ");
const answer2 = input.question(
  "2. What symbol is used for addition in JavaScript? ",
);
const answer3 = input.question(
  "3. If you combine two strings together, what is that called? ",
);
const answer4 = input.questionInt("4. What is 8 + 4? ");
const answer5 = input.question('5. What data type is the value "Hello"? ');

console.log("Here are your answers:");
console.log("1. " + answer1);
console.log("2. " + answer2);
console.log("3. " + answer3);
console.log("4. " + answer4);
console.log("5. " + answer5);
