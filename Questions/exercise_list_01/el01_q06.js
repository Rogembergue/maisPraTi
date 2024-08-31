const prompt = require("prompt-sync")();

console.log(`Insira os valores para os lados de um triangulo:`)
let a = Number(prompt(`A: `));
let b = Number(prompt(`B: `));
let c = Number(prompt(`C: `));

if(a<(b+c) && b<(a+c) && c<(a+b)){
    if ((a===b && b!==c) || (a===c && c!==b) || (b===c && b!==a)) {
        console.log(`Triangulo isosceles! (Possui dois lados iguais)`)
    }
    else if (a!==b && b!==c) {
        console.log(`Triangulo escaleno! (Possui todos os lados diferentes)`)
    }
    else if (a===b && b===c) {
        console.log(`Triangulo equilatero! (Possui todos os lados iguais)`)
    }
}
else{
    console.log(`Os valores nao formam um triangulo!`)
}