const prompt = require("prompt-sync")();
let ano = parseInt(prompt(`Insira o ano: `));

if ((ano%4===0 && ano%100!==0) || (ano%400===0)){
    console.log(`Eh um ano bissexto!`);
}else{
    console.log(`Nao eh um ano bissexto!`);
}