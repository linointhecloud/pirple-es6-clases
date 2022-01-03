// Object-oriented JavaScript
/*
 - OOP: basic idea is that you use objects to represent real
 world things. Object have own properties and functions (methods).
 - Objects can contain data and other code to represent info about
 what you're trying to model
 - JavaScript is dynamic and does not provide a traditional class
 implementation per se.
 - JavaScript inheritance is prototype based
 - Each object has a private property called the prototype
 - The prototype can have a prototype of its own
 - Nearly all objects in JavaScript are instances of Object which sits on
  top of the prototype chain.
  - "The prototype property is where inherited members are defined"
*/

// Pretend this is a class
/* function Ship() {
  this.floats = true;
  this.material = "steel";
  this.whatAmI = function() {
    console.log("I am made of: " + this.material);
  }
}

const myShip = new Ship();
myShip.whatAmI();
*/

const myObj = {
  a: 1,
  b: 2,
  c: function() {
    console.log("Got me");
  }
}

// console.log(myObj.valueOf());
// Does myObj have a method called valueOf()
// No
// Does Object have a method called valueOf()
// Yes

const myString = "hello";
console.log(myString.charAt(0));
// Does myString have a method called charAt()
// No
// Does String have a method called charAt()
// Yes

console.log(myString.valueOf());
// Does myString have a method called valueOf()
// No
// Does String have a method called valueOf()
// No
// Does Object have a method called valueOf()
// Yes

console.log(myObj.hasOwnProperty("a"));
console.log(myObj.hasOwnProperty("b"));
console.log(myObj.hasOwnProperty("c"));
console.log(myObj.hasOwnProperty("valueOf"));

const myArray = ["a", "b", "c"];
myArray.push("d");
console.log(Array.prototype);

const name1 = {
  name: "Billy",
  age: 16,
  sayName: function(){
    console.log(`My name is ${this.name}`)
  }
};

const name2 = Object.create(name1);
name2.name = "Jane Doe";

const name3 = Object.create(name2);
console.log(name3.hasOwnProperty("name");

// Object Constructors

/*function Animal(name, age, breed) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  obj.breed = breed;
  return obj;
}*/

function Animal(name, age, breed) {
  this.name = name;
  this.age = age;
  // this.breed = breed;
};

/* 
Animal.prototype.sayBreed = function() {
  console.log(`I am a $this.breed`);
} 
 */

Animal.prototype.makeNoise = function() {
  console.log(`Generic animal noise`);
}

/*
const dog1 = new Animal("Spike", 3, "Labrador");
const dog2 = new Animal("Spot", 2, "Golden Retriever");
console.log(dog1.name);
dog2.sayBreed();
*/

// Object inheritance
function Dog(name, age, breed) {
  Animal.call(this, name, age);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const barky = new Dog("Barky", 3, "Labrador");
console.log(barky.name);
console.log(barky.makeNoise);


