const prompt = require("prompt-sync")();

let num = Number(prompt(`Insira um numero: `));
let tab = 0;
//Tabuada
for(let i = 1; i <= 10; i++){
    tab = num*i;
    console.log(`${num} * ${i} = ${tab}`);
}