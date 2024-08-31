const prompt = require("prompt-sync")();

let numeros = [];

// Loop até digitar 0
while(true){
    let numero = parseFloat(prompt("Digite um numero decimal (ou 0 para encerrar):"));
    if(numero === 0){
        break;
    }
    if (!isNaN(numero)){
        numeros.push(numero);
    }
    else{
        console.log("Entrada invalida. Por favor, digite um numero decimal.");
    }
}

//Calcular soma dos numeros
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
}

// Calcula a média
if(numeros.length > 0){
    /* Outra forma interessante de realizar as soma dos elementos
    é utilizando o parametro `reduce`. Não conhecia. */
    
    // let soma = numeros.reduce((acc, num) => acc + num, 0);
    let media = soma/numeros.length;
    console.log(`A media aritmetica dos numero eh: ${media}`);
}else{
    console.log("Nenhum numero valido foi inserido.");
}