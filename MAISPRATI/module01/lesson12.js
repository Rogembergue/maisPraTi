const prompt = require("prompt-sync")();

let jogo = {
    nome: `Red Dead Redemption 2`,
    genero: `Faroeste`,
    ano: 2018,
    classificacao: 18,

    mostrarCaracteristicas: function() {
        return `O nome do jogo eh: ${this.nome}`
    }
}

console.log(jogo.mostrarCaracteristicas())