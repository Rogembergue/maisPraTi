const prompt = require("prompt-sync")();

// let num = 1

// for (counter = 2; counter <= 100; counter++){
//     console.log(`${num}`);
//     num = num + counter;
// }

let num = 1;
let counter = 2;

while (counter <=100) {
    console.log(`${num}`);
    num = num + counter;
    counter++;
}