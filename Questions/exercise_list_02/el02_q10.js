const prompt = require("prompt-sync")();

const vendas = [
    { produto: 'Travesseiro', quantidade: 10, valor: 15.00 },
    { produto: 'Cortina', quantidade: 5, valor: 200.00 },
    { produto: 'Cama', quantidade: 8, valor: 500.00 },
    { produto: 'Televisao', quantidade: 3, valor: 1000 },
    { produto: 'Bolinha de Golfe', quantidade: 3, valor: 1.00 }
];

let valorTotalVendas = 0;

vendas.forEach(venda => {
    const valorVendaProduto = venda.quantidade * venda.valor;
    valorTotalVendas += valorVendaProduto;
});

console.log(`Valor total das vendas: R$ ${valorTotalVendas.toFixed(2)}`);