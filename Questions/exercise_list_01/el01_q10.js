const prompt = require("prompt-sync")();

let num = Number(prompt(`Informe o numero: `))
//Imprimir numero 10 vezes
for(let i = 10; i > 0; i--){
    console.log(num);
}