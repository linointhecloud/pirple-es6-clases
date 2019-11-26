/*
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.
 
Socrates < Man < Mortal
*/

const men = { isMortal: true };
const socrates = {
    isMan: true
}

if (men.isMortal == true && socrates.isMan == true) {
    console.log('Socrates is mortal');
}

/* 
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla. 
*/

let cake = prompt("Entel the type of cake (vanilla or chocolate");

if (cake !== "chocolate") {
    console.log("This cake is vanilla");
} else {
    console.log("This cake is chocolate");
}