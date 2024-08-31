const prompt = require("prompt-sync")();

let termos = 10;
let a = 0;
let b = 1;

//Primeiro termo
console.log(a);

//Fibonacci
for (let i = 1; i < termos; i++) {
    let prox = a + b;
    console.log(b);
    a = b;
    b = prox;
}