// Episode 1

// const name = 'Keith';
//
// const printName = function () {
//   console.log(`My name is ${ name }`);
// }
//
// printName();

// Expected:
// My name is Keith

// Explanation:
// Constant 'name' with value 'Keith' declared outside 'printName' can be seen within 'printName'.

// Episode 2

// const score = 5;
//
// const result = function () {
//   const score = 3;
//   return score;
// }
//
// console.log(result());

// Expected:
// 3

// Explanation:
// Within 'result' only the constant 'score' with value '3' declared within 'result' can be seen.

// Episode 3

// const myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// const listAnimals = function () {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//
//   for (const i = 0; i < myAnimals.length; i++) {
//     console.log(`${ i }: ${ myAnimals[i] }`);
//   }
// }
//
// listAnimals();

// Expected:
// Error

// Explanation:
// The constant array 'myAnimals' cannot be assigned new values.

// Episode 4

// const suspectOne = 'Jay';
// const suspectTwo = 'Val';
// const suspectThree = 'Keith';
// const suspectFour = 'Rick';
//
// const allSuspects = function () {
//   const suspectThree = 'Harvey';
//   console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
// }
//
// allSuspects();
// console.log(`Suspect three is: ${ suspectThree }`);

// Expected:
// Suspects include: Jay Val Harvey Rick
// Suspect three is: Keith

// Explanation:
// Within 'allSuspects' only the constant 'suspectThree' with value 'Harvey' declared within 'allSuspects' can be seen.
// Outside 'allSuspects' only the constant 'suspectThree' with value 'Keith' declared outside 'allSuspects' can be seen.

// Episode 5

// const detective = {
//   name: 'Ace Ventura',
//   pet: 'monkey'
// };
//
// const printName = function (detective) {
//   return detective.name;
// }
//
// const detectiveInfo = function () {
//   detective['name'] = 'Poirot';
//   return printName(detective);
// }
//
// console.log(detectiveInfo());

// Expected:
// Poirot

// Explanation:
// Key 'name' of constant object 'detective' can be assigned a new value 'Poirot'.

// Episode 6

// const murderer = 'rick';
//
// const outerFunction = function () {
//   const murderer = 'marc';
//
//   const innerFunction = function () {
//     murderer = 'valerie';
//   }
//
//   innerFunction();
// }
//
// outerFunction();
// console.log(`The murderer is: ${ murderer }`);

// Expected:
// Error

// Explanation:
// Constant 'murderer' cannot be assigned' a new value 'valerie'.

// Episode 7 - Make up your own episode(s)!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

const scrumhalf = "Price";

const function1 = function () {
  return scrumhalf;
}

const function2 = function () {
  const scrumhalf = "Laidlaw"
  function1();
  console.log(scrumhalf);
}

function2();
