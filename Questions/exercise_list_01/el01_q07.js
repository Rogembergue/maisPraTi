const prompt = require("prompt-sync")();

let maca = parseInt(prompt(`Quantas maçãs voce deseja?: `));
let total;
if (!Number.isInteger(maca)){
    //Verificar se o dado inserido eh valido
    console.log(`Dado Invalido. Por favor, insira um valor inteiro!`);
}else{
    //
    if(maca<12){
        console.log(`Maçãs compradas: ${maca}`);
        total = maca*0.30;
        console.log(`Valor final: R$ ${total.toFixed(2)}`);
    }
    else if(maca>=12){
        console.log(`Maçãs compradas: ${maca}`);
        total = maca*0.25;
        console.log(`Valor final: R$ ${total.toFixed(2)}`)
    }
    else{
        console.log(`Dado invalido.`)
    }
}