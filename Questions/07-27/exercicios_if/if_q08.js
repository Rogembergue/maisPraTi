const prompt = require("prompt-sync")();
console.log(`1 = Primavera, 2 = Verão, 3 = Outono, 4 = Inverno`);
let est = parseInt(prompt(`Insira o numero referente a estacao desejada: `));

switch (est) {
    case 1:
        console.log(`Primavera`)
        break;
    case 2:
        console.log(`Verao`)
        break;
    case 3:
        console.log(`Outono`)
        break;
    case 4:
        console.log(`Inverno`)
        break;
    default:
        break;
}