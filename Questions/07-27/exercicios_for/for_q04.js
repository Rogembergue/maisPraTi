const prompt = require("prompt-sync")();

let num = parseInt(prompt('Digite o numero: '));

if (num < 0) {
    console.log(`Numero negativo!`)
}

let fat = 1;
let counter = num;

while (counter > 1) {
    fat *= counter;
    counter--;
}

console.log(`O fatorial eh: ${fat}`);