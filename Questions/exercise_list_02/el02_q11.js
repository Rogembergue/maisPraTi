const prompt = require("prompt-sync")();

const pedidos = [
    { cliente: 'Naruto', produto: 'Shuriken', quantidade: 3 },
    { cliente: 'Sasuke', produto: 'Kunai', quantidade: 5 },
    { cliente: 'Sakura', produto: 'Bandana', quantidade: 2 }
];

const totalPorCliente = {};

pedidos.forEach(pedido => {
    if (!totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] = 0;
    }
    totalPorCliente[pedido.cliente] += pedido.quantidade;
});

console.log(totalPorCliente);
