const prompt = require("prompt-sync")();
console.log(`1 - Domingo\n2 - Segunda\n3 - Terca
4 - Quarta\n5 - Quinta\n6 - Sexta\n7 - Sabado`);
let dia = parseInt(prompt(`Insira o numero corresponde ao dia da semana: `));
switch (dia) {
    case 1:
        console.log(`Domingo`)
        break;
    case 2:
        console.log(`Segunda`)
        break;
    case 3:
        console.log(`Terca`)
        break;
    case 4:
        console.log(`Quarta`)
        break;
    case 5:
        console.log(`Quinta`)
        break;
    case 6:
        console.log(`Sexta`)
        break;
    case 7:
        console.log(`Sabado`)
        break;
    default:
        break;
}