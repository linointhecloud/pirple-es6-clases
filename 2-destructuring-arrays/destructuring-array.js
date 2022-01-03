// Destructuring
/*
 - "The destructuring assignment syntax is a JavaScript expression
  that makes it possible to extract data from arrays or objects into
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

// Object destructuring
const myObj = {firstName: "Chris", lastName: "Jones"};
// const firstName = myObj.firstName;
// const lastName = myObj.lastName;
let { firstName, lastName } = myObj;

console.log(firstName, lastName);

let myVar1, myVar2;
const myObj2 = {myVar1: "a", myVar2: "b"};
({myVar1, myVar2} = myObj2);

// Assigning new variables names
const myObj3 = { a: "cool!", b: "oh yeah!", c: "nice :D", d: "awesome"};
const { q: cool, w, e: nice, r} = myObj3;

const myObj4 = { uuid: 1123455, userName: "es6rules", loggedIn: new Date()}
const { uuid: userID, userName: name, loggedIn: lastLoginDate } = myObj4;
console.log(lastLoginDate.toLocaleString());

const myObj5 = { a1: 10, b1: 20, c1: 30, d1: 40};
const {a1, b1, c1, d1, e1 = 50} = myObj5;

function stateUser({ user = null, memberType}) {
  if(!user) {
    console.log("Error!, No user name entered >:(");
  } else {
    console.log(`Username: ${user}, membership type: ${memberType}`);
  }
}

const member1 = { user: "Steve", memberType: "premiun"};
const member2 = { user: "Jane Doe", memberType: "free"};

// Destructuring objets (attributes)
function sayIfValid({prop, all1}){
  const internalObj = {
    prop,
    all1,
    constructed: true
  }
  return internalObj;
}

const myObj6 = {
  prop: "I am valid",
  proop: "I am not valid",
  all1: "I am not also valid"
}

const myConstructedObj = sayIfValid(myObj6);
//sayIfValid({prop: "I am valid"});
//sayIfValid({proop: "I am not valid"});
//stateUser({user:"Steve", memberType: "premium"});

const myObj7 = {
  title: "My address book",
  entries: [
    {
      name: "Bob",
      number: "555-5555",
      address: "123 Fake St",
      other: {
        cell: "555-3333",
        email: "bob@es6rules.com"
      }
    },
    {
      name: "Jill",
      number: "555-1234",
      address: "155 Fake St",
      other: {
        cell: null,
        email: "jill@jill.co.uk"
      }
    },
    {
      name: "Billy",
      number: "555-8888",
      address: "555 Fake St",
      other: {
        cell: "555-1233",
        email: null
      }
    }
  ],
  myPhone: "555-1111",
}

const {title, entries: [{address: addy}]} = myObj7;

console.log(addy);

const myObj8 = {
  myProp1: "Ahh!",
  myProp2: [20, 50],
}

const {myProp1, myProp2: [ , yy]} = myObj8;
console.log(yy);

// Destructuring in a loop
const { title, entries } = myObj7;
for (const {name: n, address: a, other: {cell, email}} of entries) {
  console.log(`Name: ${n}, address: ${a}, cell: ${cell}, email: ${email}`);
}