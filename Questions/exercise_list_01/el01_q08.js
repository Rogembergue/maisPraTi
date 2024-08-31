const prompt = require("prompt-sync")();

let num1 = Number(prompt(`Primeiro valor: `));
let num2 = Number(prompt(`Segundo valor: `));

if(num1===num2){
    console.log(`Numero iguais! Insira numeros diferentes.`)
}else{
    if(num1>num2){
        console.log(`${num2} ___ ${num1}`);
    }
    else if(num2>num1){
        console.log(`${num1} ___ ${num2}`);
    }
}