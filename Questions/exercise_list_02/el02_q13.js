const prompt = require("prompt-sync")();

const carrinho = {
    itens: [
        { nome: 'Laranja', quantidade: 300, precoUnitario: 0.20 },
        { nome: 'Abacaxi', quantidade: 42, precoUnitario: 2.50 },
        { nome: 'Malancia', quantidade: 5, precoUnitario: 8.00 }
    ]
};

let valorTotalCarrinho = 0;

carrinho.itens.forEach(item => {
    const valorItem = item.quantidade * item.precoUnitario;
    valorTotalCarrinho += valorItem;
});

console.log(`Valor total do carrinho: R$ ${valorTotalCarrinho.toFixed(2)}`);