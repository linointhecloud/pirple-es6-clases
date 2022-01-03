// Object-oriented JavaScript Part 2: Classes
// Classes in ES6 are just syntactical sugar over JavaScript's
// existing prototype-based inheritance
// Simple, clean syntax to create objects and take care of inheritance

// Pre-ES6 way:
/* 
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greetings = function() {
  console.log("Greetings :D");
}

function Employee(name age, role) {
  Person.call(this, name, age);
  this.roles = role;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const bill = new Employee("bill", 4, "janitor");
bill.greetings();
*/

// ES6 way -> Class method:
// Classes - a sort of special function
// Classes are NOT hoisted
/* 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
*/

const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 
  greetings() { // 
    console.log("Classes r kewl");
  }
}

const janeDoe = new Person("Jane Doe", 45);
janeDoe.greetings();

Person.prototype.greetings = function() {
  console.log("Now I say something else :P");
}
janeDoe.greetings();

// Class Inheritance
// Super keyword call functions on an object's parent class
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age)
    this.position = position;
  }
  sayGreeting() {
    const parentString = super.greetings();
    console.log(`${this.name} thinks ${parentString}`)
  }
}

class Customer extends Person {
  constructor({name = "Customer", age = "n/a", contactMethod}) {
    super(name, age);
    this.contactMetho = contactMethod;
    this.accountCredit = null;
  }
  addCredit(amount) {
    this.accountCredit += amount;
  }
  reduceCredit(amount) {
    this.accountCredit -= amount;
  }
  static sayCustomerNames(...customers) {
    for (const c of customers) {
      console.log(c.name);
    }
    //console.log(`${c1.name}, ${c2.name}`);
  }
  static transferCredit(source, target) {
    const amount = source.accountCredit;
    target.accountCredit += amount;
    source.accountCredit -= amount;
  }
}

const barb = new Employee("Barb", 27, "developer");
console.log(barb);

const customer1 = new Customer({name: "Bob", contactMethod: "email"});
const customer2 = new Customer({name: "Jane Doe", contactMethod: "email"});
console.log(customer1);
console.log(customer1.accountCredit);
customer1.addCredit(100);
console.log(customer1.accountCredit);
customer1.reduceCredit(50);
customer2.addCredit(25);
console.log(customer1.accountCredit);

Customer.sayCustomerNames(customer1, customer2);

Customer.transferCredit(customer2, customer1);

/* class Family {
  constructor(lastName) {
    this.lastName = lastName;
  }
  sayFamilyName() {
    console.log(`We are the ${this.lastname}s`);
  }
} 

class Parent extends Family {
  constructor(lastName, firstName){
    super(lastName);
    this.firstName = firstName;
  }
}

class Child extends Family {
  constructor(lastName, firstName) {
    super(lastName);
    this.firstName = firstName;
  }
}

const dad = new Parent("Dad");
*/

class FamilyMember {
  constructor(lastName, firstName, relationship) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.relationship = relationship;
  }
  sayFamilyName() {
    console.log(`We are the ${this.lastname}s`);
  }
}

class FamilyGroup {
  constructor(parents = [], children = []) {
    this.parents = parents;
    this.children = [];
  }
  addMember(member) {
    this.children.push(member);
  }
}

const smithFamily = {
  1: ["Smith", "Bill", "father"],
  2: ["Smith", "Catherine", "mother"],
  3: ["Smith", "Annie", "daughter"],
  4: ["Smith", "Will", "son"],
}

const createFamilyGroup = (famArray) => {
  const famGroup = new FamilyGroup();
  for(const prop of famArray) {
    if(prop.relationship == "father" || prop.relationship == "mother") {
      famGroup.parents.push(prop);
    } else {
      famGroup.children.push(prop);
    }
  }
  console.log(famGroup);
}

const createFamilyMembers = (famObj) => {
  const allMembers = [];
  for(const prop in famObj) {
    // destructuring object
    const [last, first, relationship] = famObj[prop];
    const newMember = new FamilyMember(last, first, relationship);
    allMembers.push(newMember);
    //console.log(famObj(prop));
  }
  createFamilyGroup(allMembers);
  // console.log(allMembers);
}

createFamilyMembers(smithFamily);

/* const dad = FamilyMember("Smith", "Bill", "Father");
const mom = FamilyMember("Smith", "Catherine", "Mother");
const annie = FamilyMember("Smith", "Annie", "Daughter");
const will = FamilyMember("Smith", "Will", "Son");
const theSmiths = new FamilyGroup([dad, mom]);
 */
theSmiths.addMember(annie);
theSmiths.addMember(will);

console.log(theSmiths);


