const prompt = require("prompt-sync")();
let num1 = Number(prompt(`Insira o primeiro numero da operacao: `));
let num2 = Number(prompt(`Insira o segundo numero da operacao: `));
let ope = prompt(`Insira o simbolo referente a operacao desejada ( + ou - ou * ou / ): `);
let result
switch(ope){
    case `+`:
        result = num1+num2;
        console.log(`O resultado da soma eh: ${result}`)
        break;
    case `-`:
        result = num1-num2;
        console.log(`O resultado da subtracao eh: ${result}`)
        break;
    case `*`:
        result = num1*num2;
        console.log(`O resultado da multiplicacao eh: ${result}`)
        break;
    case `/`:
        result = num1/num2;
        console.log(`O resultado da divicao eh: ${result}`)
        break;
    default:
        break;
}