// Destructuring
/*
 - "The destructuring assignment syntax is a JavaScript expression
  that makes it possible to extract data from arrays or objetct into
  distinct variables" - Mozilla Developer Network.
- Destructuring syntax can be used on left-hand side of assignment
*/

/* const myArray = new Array();
myArray[0] = 1;
myArray[0] = 2;

console.log(myArray);
*/

const myArray = [1, 2, 3, 4, 5];
const [x, y, z, a, b] = myArray;
console.log(x); 

const mySecondArray = ["Jane Doe","John Doe","Billy Bob"];
let name1, name2, name3;
[name1, name2, name3, name4 = "I'm a default :D"] = mySecondArray;
console.log(name1, name2, name3);

let aa = 100;
let bb = 250;
let cc = 500;
[bb, cc] = [cc, bb];

function foodFilter(arr, term) {
  return arr.filter((t) => t === term)
}

const [result] = foodFilter(["donuts", "chocolate", "candy", "gummy bears"], "donuts");
console.log(result);

// Can ignore some values
const anotherArr = [10, 20, 50, 100, 1000, 30];
const [numA, numB, , numC, , numD] = anotherArr;

console.log(`First : ${numA}, Second: ${numB} Third: ${numC}`);

// Can use rest pattern
function sayHi(firstArg, ...restOfArgs) {
  console.log(firstArg, restOfArgs);
}

const yetAnotherarr = ["dogs", "cats", "birds", "snakes", "hedgehogs"];
const [dogString, ...otherAnimals] = yetAnotherarr;

console.log(dogString);

console.log(otherAnimals.filter((t) => {
  return t === "snakes";
}))

