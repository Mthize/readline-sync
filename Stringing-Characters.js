const input = require("readline-sync");

const text = input.question("Enter a word or phrase: ");
const index = input.question("Enter an index number: ");

if (index >= 0 && index < text.length) {
  console.log("The character at index " + index + " is: " + text[index]);
} else {
  console.log("That index is out of range.");
}
