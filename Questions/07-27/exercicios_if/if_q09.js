const prompt = require("prompt-sync")();
let idade = parseInt(prompt(`Insira a idade: `));
if (idade>=0 && idade>=12) {
    console.log(`${idade} --> Crianca!`)
}
else if (idade>=13 && idade>=17) {
    console.log(`${idade} --> Adolecente!`)
}
else if (idade>=18 && idade>=59) {
    console.log(`${idade} --> Adulto!`)
}
else if (idade>=60) {
    console.log(`${idade} --> Idoso!`)
}
else{
    console.log(`${idade} --> Idade Invalida!`)
}