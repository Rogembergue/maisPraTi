// Diga quantos dias possue o mes escolhido utilizando `Switch case`

const prompt = require("prompt-sync")();
let mes = prompt(`Qual eh o mes? `);
console.log(`Seu mes eh ` + mes + `.`);
switch (mes) {
    case `Janeiro`:
    case `Marco`:
    case `Maio`:
    case `Julho`:
    case `Agosto`:
    case `Outubro`:
    case `Dezembro`:
        console.log("Ele possui 31 dias!");
        break;
    case `Abril`:
    case `Junho`:
    case `Setembro`:
    case `Novembro`:
        console.log("Ele possui 30 dias!");
        break;
    case `Fevereiro`:
        console.log("Ele possui 28 dias!");
        break;
    default:
        break;
}