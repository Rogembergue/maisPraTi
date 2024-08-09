const prompt = require("prompt-sync")();

let jogo = {
    nome: `Red Dead Redemption 2`
    genero: `Faroeste`
    ano: 2019 


    mostrarCaracteristicas: function() {
        return `O nome do jogo eh: ${this.nome}`
    }
}

console.log(jogo.mostrarCaracteristicas())

