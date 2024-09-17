const prompt = require("prompt-sync")();

const produtos = [
    { nome: 'RTX 3060 Ti', preco: 2600.00, desconto: 0 },
    { nome: 'Ryzen 5600', preco: 750.00, desconto: 0 },
    { nome: 'Corsair VS550', preco: 300.00, desconto: 0 },
    { nome: 'Fan', preco: 10.00, desconto: 0 }
];

const percentualDesconto = 0.10;

produtos.forEach(produto => {
    const valorDesconto = produto.preco * percentualDesconto;
    const precoComDesconto = produto.preco - valorDesconto;
    console.log(`Nome: ${produto.nome}, Novo Preço: R$ ${precoComDesconto.toFixed(2)}`);
});
