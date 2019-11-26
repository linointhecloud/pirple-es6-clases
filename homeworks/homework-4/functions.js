/*
You should create a function that accepts a name and returns a boolean (true or false) 
representing whether that name identifies a man who is mortal or not.

Your function to gracefully handle unexpected inputs (such as an unrecognized name
or a name that is a not a string at all) without throwing an exception.

Function takes 1 parameter and loops through all the items in mortal in the mortalMen array 
checking whether the parameter passed into the function matches a name in the array.
If there is a match make the bool variable true and return it.
*/

let mortalMen = ["Socrates", "Picasso", "Galileo", "Hawkings"];
let isMortal = false;

isMortalMen = (name) => {
    mortalMen.forEach(item => {
        if (item === name) {
            isMortal = true;
        } else {
             
        }
    })
    return isMortal;
}

console.log(isMortalMen("Picas"));