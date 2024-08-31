const prompt = require("prompt-sync")();

let num;
let soma = 0;
//Somar numero 5 vezes
for(let i = 0; i < 5; i++){
    let num = Number(prompt(`Informe o numero: `));
    soma = soma+num;
    console.log(`Soma: ${soma}`);
}