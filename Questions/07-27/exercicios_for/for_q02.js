const prompt = require("prompt-sync")();
let num = parseInt(prompt(`Insira um numero: `));
let pri = true;

if (num<=1){
    pri = false;
} else {
    for (let count = 2; count < num; count++){
        if (num%count==0) {
            pri = false;
            break;
        };
    }
}

if (pri) {
    console.log(`Numero Primo!`)
} else {
    console.log(`O numero NAO EH PRIMO!`)
}