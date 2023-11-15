// create a constant variable (const)

const myName = "Maliyah";

// create a variable that can be reassigned (let)

let day = "Tuesday";

// create three variables and assign them values of different data types (=)

let movement = "go";
let age = 29;
const lifeStatus = "alive";

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof movement);
console.log(typeof age);
// change the value referenced by a variable (dynamic typing)

day = "Wednesday";

// print the type of the variable you just changed (typeof)

console.log(typeof day);

// create variables and give them values to complete the sentences that will print  below.
let learningLanguage = "Javascript";
let numberOfWeeks = 8;
let masterStatus = false;

// Which variables need to be created?
// What type of data needs to go in each variable?

console.log(
  "Hello, my name is " +
    { myName } +
    ", and I am learning " +
    { learningLanguage } +
    ". I have been practicing for only " +
    { numberOfWeeks } +
    " weeks, so my status as a master is: " +
    { masterStatus } +
    "."
);
