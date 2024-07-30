const prompt = require("prompt-sync")();
let peso = Number(prompt(`Insira seu peso em kg: `));
let alt = Number(prompt(`Insira seu altura em m: `));
let imc = (peso/(alt*alt));

if(imc<18.5){
    console.log(`IMC: ${imc} --> Abaixo do peso!`)
}
else if(imc>=18.5 && 24.9){
    console.log(`IMC: ${imc} --> Peso normal!`)
}
else if(imc>=25 && 29.9){
    console.log(`IMC: ${imc} --> Sobrepeso!`)
}
else if(imc>=30 && 34.9){
    console.log(`IMC: ${imc} --> Obesidade grau I!`)
}
else if(imc>=35 && 39.9){
    console.log(`IMC: ${imc} --> Obesidade grau II!`)
}
else if(imc>=40){
    console.log(`IMC: ${imc} --> Obesidade grau III!`)
}
else{
    console.log(`IMC: ${imc} --> Invalido!`)
}