const prompt = require("prompt-sync")();
let num = parseInt(prompt(`Insira um numero: `));
if (num%2==0) {
    console.log(`Ele eh par!`)
} else {
    console.log(`Ele eh impar!`)    
}