const prompt = require("prompt-sync")();
let num = Number(prompt(`Insira um numero: `));
if (num > 0) {
    console.log(`Seu numero eh positivo!`);
}
else if (num == 0) {
    console.log(`Seu numero eh 0!`);
}
else {
    console.log(`Seu numero eh negativo!`);
}
