const prompt = require("prompt-sync")();
let peso = Number(prompt(`Insira seu peso em kg: `));
let alt = Number(prompt(`Insira seu altura em m: `));
let imc = (peso/(alt*alt));

//Verificar IMC
if(imc<18.5){
    console.log(`IMC: ${imc} --> Abaixo do peso!`)
}
else if(imc>=18.5 && imc<25){
    console.log(`IMC: ${imc} --> Peso normal!`)
}
else if(imc>=25 && imc<30){
    console.log(`IMC: ${imc} --> Sobrepeso!`)
}
else if(imc>=30){
    console.log(`IMC: ${imc} --> Obesidade!`)
}
else{
    console.log(`IMC: ${imc} --> Invalido!`)
}