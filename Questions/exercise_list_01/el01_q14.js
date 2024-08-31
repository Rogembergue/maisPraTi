const prompt = require("prompt-sync")();

let num = parseInt(prompt(`Numero: `));
let a = num;
let fat = num;

// Calcular fatorial
if (num===0) {
    fat = 1;
}else{
    for(let i = a-1; i > 0; i--){
        fat = fat * i;
    }
}
console.log(`O fatorial de ${num} é: ${fat}`);