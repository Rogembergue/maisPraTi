const prompt = require("prompt-sync")();
let a = 0;
let b = 1;
let aux;
for (let count=0; count<10; count++) {
    console.log(`Fibo: ${a}`)
    aux = a;
    a = b;
    b = aux + b;
} 