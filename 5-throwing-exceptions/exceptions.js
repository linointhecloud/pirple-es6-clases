// Exception handling

const myObj = [1, 2, 3];
myObj.map((obj) => console.log(obj));

// Throw your own exception
/*
 - Use the throw statement to throw own exception
 - You specify the expression containing the value to be thrown
   e.g.: throw expression
 - Can throw any expression
*/

function checkIfNum(n){
  if (isNaN(n)) {
    throw "this is not a number";
  } else {
    console.log(n);
  }
}

//checkIfNum("hey");
//checkIfNum(1);

const myObjException = {
  toString: function() {
    return "I am an object exception";
  }
}

function MyException(message) {
  this.message = message;
  this.name = "My exception";
  this.toString = function() {
    return this.name + ": " + this.message;
  }
}
//throw new MyException("Missing data");

// try .. catch
//try {
//  throw "Exception!";
//} catch(e) {
//  console.log(e);
//}

let myNum = 20;
const myErrorLog = [];

function checkIfNumber(num) {
  if(isNaN(num)){
    throw "not a number!";
  } else {
    console.log("Yes, this is a number")
  }
}

function errorHandler(e){
  myErrorLog.push(e);
}

try {
  checkIfNum(myNum);
} catch (catchID) {
  errorHandler(catchID);
}

function MyString(string) {
  if(typeof string === "string") {
    this.value = string;
    this.getValue = function() {
      console.log("Your string: " + this.value + ".");
    }
  } else {
    throw new StringExceptionError(string);///
  }
}

function StringExceptionError(value) {
  this.value = value;
  this.message = "Must be a string";
  this.toString = function() {
    return this.value + ": " + this.message;
  }
}

function verifyString(s) {
  let str;
  try {
    str = new MyString(s);
  } catch (e) {
    if(e instanceof StringExceptionError) {
      console.log("String exception" + e);
    } else {
      console.log("Other exception");
    }
  }
  return str;
}

const a = verifyString("Im am a string");
const b = verifyString(true);
