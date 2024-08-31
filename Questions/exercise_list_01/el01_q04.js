const prompt = require("prompt-sync")();

let num1 = Number(prompt(`Insira o primeiro numero: `));
let ope = prompt(`Digite + - * ou / para escolher uma operacao correspondente: `);
let num2 = Number(prompt(`Insira o segundo numero: `));
let result;
switch (ope){
    case `+`:
        result = num1+num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case `-`:
        result = num1-num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case `*`:
        result = num1*num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;
    case `/`:
        result = num1/num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;
    default:
        console.log(`Invalido!`)
        break;
}