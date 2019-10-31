// Callback and Promises
// A way to write asynchronus JavaScript

/*
 - A callback function is a function that is passed to another function
 as a parameter.
 - This inner function is called at some point during the execution of
 the containing function
 - In other words, it's "called back" at some specified point inside the
 containing function's body
*/

function shouldGoFirst(callback) {
    setTimeout(() => {
        console.log("I should go first");
        callback();        
    }, 1000);

}

function shouldGoSecond() {
    console.log("I should go second");
}

shouldGoFirst(shouldGoSecond);
// shouldGoSecond();

function sumUpNumbers(num1, num2, callback) {
    let summedValue;
    setTimeout(() => {
        summedValue = num1 + num2;
        callback(summedValue);    
    }, 1000);
}

function logSummedValue(value) {
    console.log(`The summed total is: ${value}`);
}

sumUpNumbers(100, 50, logSummedValue);

// Callback function
function sayWhenDone(loopCount) {
    console.log(`Done! :). Capitalized ${loopCount} names`); 
}

// Parent function
function looper(arr, callback) {
    let i = 0;
    for(i ; i < number; i += 1) {
        //console.log(i);
        const name = arr[i];
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1); 
        arr[i] = capitalizedName;
    }
    callback(i);
}
const myNames = ["chris", "russell", "toby", "angela"];
//looper(6, sayWhenDone);

function anotherLogger(num1, num2, callback) {
    const squaredAndSummedNums = (num1 * num1) + (num2 * num2);
    console.log(squaredAndSummedNums);
    if (callback) {
        callback();
    }
}

anotherLogger(10, 50, function(){
    console.log("Hey!");
})


// Promises
/*
 - "A Promise is a proxy for a value not necessarilly know when the promise
 is created" - MDN
 - Promises (similar to callbacks) are used for async computations
 - Think of a promise a representing as a value that may be available now, later or never.
 - Can assoaciate a handler with a async action
 - A promise exists in three states
    - Pending: initial state (default), not fullfilled
    - Fullflled: OK! Got it
    - Rejected: Failed
*/

const testPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        reject("promise no good! Rejected");    
    }
    setTimeout(() => {
        resolve("promise OK!");
    }, 1000);
})

testPromise.then((resolveMessage) => {
    console.log(`Looks like: ${resolveMessage}`);
}).then(() => {
    console.log("I should run after the promise is resolved");
}).catch((rejectMessage) => {
    console.log(`Error: ${rejectMessage}`);
});

function numAdder(num1, num2) {
    return new Promise((resolve, reject) => {
        const addedNums = num1 + num2;
        setTimeout(() => {
            resolve(addedNums);            
        }, 5000);
    } )
}

function numSquarer(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 800);
    });
}
numAdder(10, 10).then(data => { 
    return numSquarer(data);
    }).then(moreData => { 
    console.log(moreData)
});

numAdder(10, 10)
    .then(data => numSquarer(data))
    .then(moreData => console.log(moreData));
