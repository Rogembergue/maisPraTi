const prompt = require("prompt-sync")();

let nota = Number(prompt(`Insira a nota: `));

//Verificar nota
if (nota>=0 && nota<3) {
    console.log(`${nota} --> Reprovado!`)
}
else if (nota>=3 && nota<7) {
    console.log(`${nota} --> Recuperacao!`)
}
else if (nota>=7 && nota<=10) {
    console.log(`${nota} --> Aprovado!`)
}
else{
    console.log(`${nota} --> Nota Invalida!`)
}