const prompt = require("prompt-sync")();

for (let i = 1; i <= 5; i++) {
    let linha = ``;
    for (let j = 1; j <= i; j++) {
        linha = linha + j + ` `;
    }
    console.log(linha);
}