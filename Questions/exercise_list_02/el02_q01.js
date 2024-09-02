const prompt = require("prompt-sync")();

const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020,
    cor: "Prata"
}

for (const propriedades in carro) {
    console.log(`${propriedades}: ${carro[propriedades]}`);
}