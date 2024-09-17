const prompt = require("prompt-sync")();

// Criando um array de objetos transacoes
const transacoes = [
    { tipo: 'entrada', valor: 500.00 },
    { tipo: 'saída', valor: 200.00 },
    { tipo: 'entrada', valor: 150.00 },
    { tipo: 'saída', valor: 50.00 },
    { tipo: 'entrada', valor: 100.00 }
];

// Variável para armazenar o saldo final
let saldoFinal = 0;

// Usando forEach para calcular o saldo final
transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldoFinal += transacao.valor;
    } else if (transacao.tipo === 'saída') {
        saldoFinal -= transacao.valor;
    }
});

// Exibindo o saldo final
console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);
