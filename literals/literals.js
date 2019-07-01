// Template Literals
/*
 - String literals allowing embedded expresions
 - Makes it easier to create multiline string and allow string
   interpolation
 - Enclose in back-ticks (`String goes here`) instead of single
   quotes ('') or double quotes ("")
 - Can contain placeholders
*/

var myFirstName = "Chris";
var myLastName = "Jones";
var myAge = "30";

console.log("Hello," + " "+ myFirstName + " " + myLastName + " " + myAge);

var myNewList =
    "<ul>\n" + 
        "<li>I am item 1</li>\n" +
        "<li>I am item 2</li>\n" +
        "<li>I am item 3</li>\n" +
    "</ul>";

// const myDiv = document.getElementById("myDiv");
// myDiv.innerHTML = myNewList;    

// ES6 below

const myOtherNewList = 
    `<ul>
        <li>I am es6 number 1!</li>
        <li>I am item 2</li>
        <li>I am item 3</li>
        <li>I am item 4</li>
    </ul>`;

const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = myOtherNewList;

const first = "Sally"
const last = "Smith"
const age = 52

const fullNameAndAge = `${first} ${last}, age: ${age}`;

console.log(`Hello ${first} ${last}. You are ${age} today`);
console.log(`Hello ${fullNameAndAge}`);

const isTrue = true;
console.log(`Is true: ${!isTrue}?`);

const dateNow = new Date();
const localeDate = dateNow.toLocaleString();
console.log(`Today's is: ${localeDate}`);
