const prompt = require("prompt-sync")();

let num = parseInt(prompt(`Informe o numero desejado: `));

if (!Number.isInteger(num)){
    //Verificar se o dado inserido eh valido
    console.log(`Dado Invalido. Por favor, insira um numero inteiro!`);
}
else{
    //Verificar se o numero eh par ou impar
    if (num%2===0){
        console.log(`Seu numero eh par!`);
    }
    else{
        console.log(`Seu numero eh impar!`);
    }
}
