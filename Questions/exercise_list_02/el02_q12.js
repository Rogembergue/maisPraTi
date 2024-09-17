const prompt = require("prompt-sync")();

const estoque = [
    { produto: 'Kunai', quantidade: 5, minimo: 10 },
    { produto: 'Shuriken', quantidade: 15, minimo: 10 },
    { produto: 'Lamen', quantidade: 2, minimo: 6 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);