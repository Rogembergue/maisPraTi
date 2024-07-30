const prompt = require("prompt-sync")();
let idade = parseInt(prompt(`Insira a idade do um nadador: `));

if(idade<5 && idade>0){
console.log(`${idade} --> Jovem demais! Nao possui categoria.`)
}
else if(idade>=5 && idade<=7){
    console.log(`Idade: ${idade} --> Infantil A`)
}
else if(idade>=8 && idade<=10){
    console.log(`Idade: ${idade} --> Infantil B`)
}
else if(idade>=11 && idade<=13){
    console.log(`Idade: ${idade} --> Juvenil A`)
}
else if(idade>=14 && idade<=17){
    console.log(`Idade: ${idade} --> Juvenil B`)
}
else if(idade>=18 && idade<120){
    console.log(`Idade: ${idade} --> Adulto`)
}
else{
    console.log(`${idade}????? Impossivel! Pare de brincadeira. (._.)`)
}
